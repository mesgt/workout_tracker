const db = require("../models");


module.exports = function (app) {
//Displaying all workouts from db
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });

//Add exercise to db
    app.post("api/workouts", ({data}, res))


}