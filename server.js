const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const todoRoutes = require("./todoRoute");

app.use(express.json());

dotenv.config({});

const db = process.env.MONGO_URI;
console.log(db,"database");

//Database connected
mongoose.connect(db,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("Database connected");
}).catch((err) => {
    console.log(err);
})

app.get("/",(req,res) => {
    res.status(200).json({
        "message": "Good to go"
    })
})

app.use("/todo",todoRoutes);

app.listen(5000,() => {
    console.log("Server is running")
})