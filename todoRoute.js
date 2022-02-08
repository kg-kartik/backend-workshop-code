const express = require("express");
const router = express.Router();
const Todos = require("./models/Todos");

router.post("/addTodo",(req,res) => {
    const {name,by} = req.body;

    //2022-02-12

    let unparsedData = by.split("-");

    let date = new Date(unparsedData[0],unparsedData[1]-1,unparsedData[2]);

    const todo = new Todos({
        name,
        by:date
    })

    todo.save()
    .then((response) => {
        res.status(200).json(response);
    }).catch((err) => {
        res.status(400).json(err);
    })
})

router.get("/getTodos",(req,res) => {
    Todos.find({})
    .then((response) => {
        res.status(200).json(response);
    }).catch((err) => {
        res.status(400).json(err);
    })
})


module.exports = router;