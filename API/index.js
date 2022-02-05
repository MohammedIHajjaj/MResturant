const express = require('express');
const bodyParser = require('body-parser');
const JOI = require('joi');
const app = express();
app.use(bodyParser.json());
const courses = [ { id: 1, name: "course1" }, { id: 2, name: "course2" }, { id: 3, name: "course3" }];
app.get('/getAll', (req, res) => {
    res.status(200).send(courses);
})
app.get('/get/:id', (req, res) => {
    res.status(200).send(courses[(req.params.id)]);
});
app.post('/add', (req, res) => {
    const course = {
        name: req.body.name
    };
    courses.push(course);
    res.status(200).send(courses);
});
app.put('/edit/:id', (req, res) => {
    const course = courses.find(item => item.id == req.params.id);

    course.name = req.body.name;

    res.send(courses);
});
app.delete('/delete/:id', (req, res) => {
    const course = courses.find(item => item.id = req.params.id);
    courses.splice(courses.indexOf(course), 1);
    res.send(courses);
})
const port = 3001;
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});