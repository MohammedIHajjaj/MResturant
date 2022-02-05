const express = require('express');
const router = express.Router();
const connection = require('./dbconnect');

router.get("/getall", (req, res) => {
    connection.query('SELECT * FROM food', (err, result) => {
        if (err) {
            console.log("Query error:" + err);
            res.json({ "Error": err });
        } else {
            res.json(result);
        }
    })
});

router.post("/add", (req, res) => {
    let food = req.body.food;
    connection.query(`INSERT INTO food (title,description,price) VALUES
        ('${food.title}','${food.description}','${food.price}')
    `, (err, result) => {
        if (err) {
            console.log("Query error:" + err);
            res.json({ "Error": err });
        } else {
            res.json({ "added": result });
        }
    })
    res.send("add successfully");
});

module.exports = router;