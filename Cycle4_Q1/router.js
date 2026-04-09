const express = require('express');
const route = express.Router();


route.post("/postReq", (req, res)=>{
    // console.log("Enter");
    res.status(201).send("This is a POST Request");
});

route.get("/getReq", (req, res) =>{
    res.status(200).send("Hi ! I'm Root (GET)");
});



module.exports = route;