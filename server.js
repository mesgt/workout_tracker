const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3002;

const db = require("./models");
// const { Workout } = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate", { useNewUrlParser: true });

db.Workout.create({ name: "Cool Workout!" })
    .then(dbWorkout => {
        console.log(dbWorkout);
    })
    .catch(({ message }) => {
        console.log(message);
    });


require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes.js")(app);

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
});