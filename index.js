// import express and create server
let express = require('express');
let app = express();
// middleware for reading json data
app.use(express.json())
// define empty student array to be updated using restful routes
let studentArray = [];

// Test Route
app.get('/greeting/:name', (req,res) => {
    res.send(`Hello ${req.params.name}`);
})
// READ STUDENTS
app.get('/student/:id', (req,res) => {
    let jsonStudent = {
        id: req.params.id,
        name: "Bob",
        email: "bozo@MediaList.com"
    };
    // send student based on ID
    res.send(jsonStudent);
})
// DELETE STUDENT
app.delete('/student/:id', (req,res) => {
    let jsonStudent = {
        id: req.params.id,
        name: "Dave",
        email: "bozo@MediaList.com",
        status: "DELETED"
    };
    res.send(jsonStudent);
});
// CREATE STUDENT
app.post('/student', (req,res) => {
    req.body.status = "Created";
    // add student to array
    studentArray.push(req.body);
    res.send(studentArray);
});
// UPDATE STUDENT
app.put('/student/:id', (req,res) => {
    req.body.status = "Updated";
    res.send(req.body);
});

app.listen(8000, () => {
    console.log("Listening on port 8000");
})