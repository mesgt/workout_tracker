const db = require("../models");


module.exports = function (app) {

    //Create a workout
    db.Workout.create({ name: "Cool Workout!" })
        .then(dbWorkout => {
            console.log(dbWorkout);
        })
        .catch(({ message }) => {
            console.log(message);
        });

    //Displaying all workouts from db
    app.get("/api/workouts", (req, res) => {
        db.Exercise.find({})
            .then(dbExercise => {
                res.json(dbExercise);
            })
            .catch(err => {
                res.json(err);
            });
    });

    //Add exercise to Workout db
    app.post("api/workouts", ({ data }, res) => {
        db.Exercise.create(data)
            .then(({ _id }) => db.Workout.findOneAndUpdate({}, { $push: { exercise: _id } }, { new: true }))
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    //Edit workout by id (adding more exercise to workout)
    app.post("api/workouts/:id", (req, res) => {
        console.log(req.params)
        db.Exercise.find({ "_id": mongojs.ObjectId(req.params.id) }, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.json(data);
            }
        });
    });


    // query to grab the documents from the Workout collection:

    // app.get("/populateduser", (req, res) => {
    //     db.Workout.find({})
    //         .populate("exercise")
    //         .then(dbWorkout => {
    //             res.json(dbWorkout);
    //         }).catch(err => {
    //             res.json(err);
    //         });
    //     })
    }