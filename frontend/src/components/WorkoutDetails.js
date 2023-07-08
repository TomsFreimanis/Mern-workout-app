import React from "react";
import Imgdelete from "../assets/bin.png"; 
// import Imgupedate from "../assets/pencil.png";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();
  const createdAt = new Date(workout.createdAt);
  const currentTime = new Date();
  const timeDiff = Math.floor((currentTime - createdAt) / 1000); // Time difference in seconds

  let formattedTime;

  if (timeDiff < 60) {
    formattedTime = `posted ${timeDiff} seconds ago`;
  } else if (timeDiff < 3600) {
    const minutes = Math.floor(timeDiff / 60);
    formattedTime = `posted ${minutes} minutes ago`;
  } else if (timeDiff < 86400) {
    const hours = Math.floor(timeDiff / 3600);
    formattedTime = `posted ${hours} hours ago`;
  } else {
    formattedTime = createdAt.toLocaleString("en-US", {
      dateStyle: "short",
      timeStyle: "short",
    });
  }

  // Example output: 7/7/23, 6:28 AM
  const handleClick = async () => {
    const response = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p>{formattedTime}</p>
      <span onClick={handleClick}>
        <img src={Imgdelete} alt="Description" className="small-img" />
      </span>

      {/* <span className="span2" onClick={handleClick}>
        <img src={Imgupedate} alt="Description" className="small-img" />
      </span> */}
    </div>
  );
};

export default WorkoutDetails;
