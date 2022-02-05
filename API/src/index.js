const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const restaurants = require('./restaurants');
const foods = require('./foods');

app.use(cors());

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.status(200).send("Done");
});

app.use("/restaurants", restaurants);
app.use("/foods", foods);

let port = 3001;
app.listen(port, () => {
    console.log(`app listen at port ${port}`);
})