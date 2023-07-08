const express = require("express");
require("dotenv").config(); // process.env.ANDCAPITALSTRING
const mongoos = require("mongoose");

const workoutRoutes = require("./routes/workouts");

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);
// connect to db

mongoos
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for request
    app.listen(process.env.PORT, () => {
      console.log("connected to mongodb & listening on port ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
