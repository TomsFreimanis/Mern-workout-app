const express = require("express");

const {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");
const router = express.Router();

// this is to GET all workouts
router.get("/", getWorkouts);

// GET a single workout
router.get("/:id", getWorkout);

// POST new workout
router.post("/", createWorkout);

// detele workout
router.delete("/:id", deleteWorkout);

// update workout
router.patch("/:id", updateWorkout);

module.exports = router; //exporting router
