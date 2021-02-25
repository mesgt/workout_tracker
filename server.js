const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3002;

const app = express();

const db = require("./models");
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes.js")(app);

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//Connect to MongoDB
const mongoDB_URI = "mongodb+srv://catninja:password1234@cluster0.sbxwt.mongodb.net/workout_tracker?retryWrites=true&w=majority"

mongoose.connect(process.env.mongoDB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(result =>
        app.listen(PORT))
    .catch(err =>
        console.log(err));

