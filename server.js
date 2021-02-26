const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3002;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//Connect to MongoDB

mongoose.connect(process.env.mongoDB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
    .then(result => {
        require("./routes/apiRoutes")(app);
        require("./routes/htmlRoutes.js")(app)
        app.listen(PORT)})
    .catch(err =>
        console.log(err));

