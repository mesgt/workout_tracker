const db = require("../models");


module.exports = function (app) {

    //Display all workouts on workout page
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });

    //Display all workouts on range page
    app.get("/api/workouts/range", ({ }, res) => {
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });

    //Add completed workout to Workout db
    app.post("api/workouts", (req, res) => {
        db.Workout.create(req.body)
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });

    //Edit workout by id (adding more exercise to workout)
    app.put("api/workouts/:id", (req, res) => {
        // console.log(req.params)
        db.Workout.findByIdAndUpdate({ _id: req.params.id }, { exercises: req.body })
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            })
    });

}