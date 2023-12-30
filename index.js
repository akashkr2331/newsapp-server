const express = require("express")
require("dotenv").config()
const bodyParser = require("body-parser")
const cors = require("cors")
const axios=require("axios")

const app = express()

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

app.use(cors())

app.get('/news',async(req,res)=>{
    try{
        const response=await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=d8446f43626643d79745c473523def37")
          console.log(response);
        res.send(response.data);
    }
    catch (err) {
        res.status(404).json({ message: err.message });
      }

})


  app.listen(4000, ()=>{
    console.log("Server is running")
})
