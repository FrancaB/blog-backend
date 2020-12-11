const express =require ('express');
require ('dotenv').config ();
const routes = require ("./Routes/auth.js")
const mongoose = require('mongoose');
const http =require ("http");
const port= process.env.PORT;
const app = express();
const server = http.createServer(app);

mongoose.connect(process.env.MongoDB_URI, {})
.then(()=>{
    console.log("connection to DB successful")
})
.catch((error)=> {
    console.log("Connection to DB failed")
})

app.use(express.json())

app.use(routes)

server.listen(port, ()=> {
    console.log("server started successfully")
})

