const db = require("../models")

module.exports = function (app) {

    app.get("/", (req, res) => {
        db.Workout.find({})
            .then(newWorkout => {
                console.log(newWorkout)
                // res.json(newWorkout);
            })
            .catch(({ message }) => {
                console.log(message);
            });
    });



}