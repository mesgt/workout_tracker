const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    exercises: {
        type: String,
        name: String,
        duration: Number,
        weight: Number,
        reps: Number,
        sets: Number,
        distance: Number,
        trim: true,
        // required: "Exercise is required!"
    }
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;