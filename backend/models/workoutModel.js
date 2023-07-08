const mongoos = require("mongoose");

const Schema = mongoos.Schema;

const workoutScema = new Schema({
  title: {
    type: String,
    required: true,
  },
  reps: {
    type: Number,
    required: true,
  },
  load: {
    type: Number,
    required: true,
  },
}, {timestamps:true});

module.exports = mongoos.model('workout', workoutScema)

