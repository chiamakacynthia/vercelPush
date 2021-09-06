 require("dotenv").config();
const express = require("express")
const port = process.env.PORT||3001;
const app = express();
const mongoose = require("mongoose")
app.use(express.json())

const path = require("./Router")


mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser:true,
  
}).then(() =>{
    console.log("database is now connected")
}).catch(() =>{
    console.log("unable to connect")
})

app.use("/api/signIn", path)


app.get("/", (req, res) =>{
    res.send("server is ready to run and making waves")
})

app.listen(port, () =>{
    console.log(`server is listening to :${port}`)
})