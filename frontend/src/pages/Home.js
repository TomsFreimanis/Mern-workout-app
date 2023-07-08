import React from "react";
import { useEffect } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutsForm from "../components/WorkoutsForm";
import {useWorkoutsContext} from "../hooks/useWorkoutsContext"

const Home = () => {
 const {workouts, dispatch} = useWorkoutsContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();

      if (response.ok) {
       dispatch({type: 'SET_WORKOUTS', payload:json})
      }
    };
    fetchWorkouts();
  }, [dispatch]);

  return (
    <div className="home-container">
      <div className="home-content">
        <div className="workouts">
          {workouts &&
            workouts.map((workout) => (
              <WorkoutDetails key={workout._id} workout={workout} />
            ))}
        </div>
      </div>
      <div className="form-container">
        <WorkoutsForm />
      </div>
    </div>
  );
};

export default Home;
