const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

mongoose.connect('mongodb+srv://admin:admin@cluster0-jbwzj.gcp.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true }
    ).then(
        () => {console.log("KJGH") },
        (err) => { /* handle errors */ }
    );
    


const item = require("./item");

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use("/item", item);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));