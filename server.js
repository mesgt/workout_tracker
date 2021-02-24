const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");
// const { Workout } = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate", { useNewUrlParser: true });

db.Workout.create({ name: "Cool Workout!" })
    .then(userWorkout => {
        console.log(userWorkout);
    })
    .catch(({ message }) => {
        console.log(message);
    });

// db.Workout.post("/api/workouts", ({body}, res) => {
//     const userWorkout = new Workout(body);
//     Workout.create(body)
//     .then(newWorkout => {
//         res.json(newWorkout);
//     })
//     .catch(err => {
//         res.json(err);
//     });
// });

// require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes.js")(app);

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
});