const express = require('express');
const app = express();
const route = require('./router');


app.use('/', route);

app.listen(3000, (req, res) =>{
    console.log("Server is listening on PORT 3000");
});