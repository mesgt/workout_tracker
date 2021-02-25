const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
        required: "Date is Required"
    },
    exercises: {
        type: String,
        name: String,
        duration: Number,
        weight: Number,
        reps: Number,
        sets: Number,
        distance: Number,
        trim: true,
        required: "Exercise is required!"
    },
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;