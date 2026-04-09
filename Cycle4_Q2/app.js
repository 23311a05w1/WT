const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const router = require('./router/bookRoute');

app.use(express.json());
app.use(bodyParser.json());
app.use("/books", router);


app.listen(3000, (req, res) =>{
    console.log("Server Listening on PORT 3000");
});