const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const contactRoutes=require("./routes/contactRoutes");
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.send("Welcome to CRM app");
})

app.use("/api/v1",contactRoutes);
mongoose.connect("mongodb://localhost:27017/contactDB");
// mongoose.connect(config.DB_URL)
mongoose.connection.on("error",(error)=>{
    console.log("ERROR IN DATABASE",error);
})


app.listen(9000,()=>{
    console.log("Server running on http://localhost:9000");
})