const express = require('express');
const router = express.Router();
const connection = require('./dbconnect');

router.get("/getall", (req, res) => {
    connection.query('SELECT * FROM restaurant', (err, result) => {
        if (err) {
            console.log("Query error:" + err);
            res.json({ "Error": err });
        } else {
            res.json(result);
        }
    })
});

router.post("/add", (req, res) => {
    let restaurant = req.body.restaurant;
    connection.query(`INSERT INTO restaurant (title,cuisines,latitude,longitude,rate) VALUES
        ('${restaurant.title}','${restaurant.cuisines}','${restaurant.latitude}','${restaurant.longitude}','${restaurant.rate}')
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