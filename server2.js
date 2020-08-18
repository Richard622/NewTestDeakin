const express = require("express")
const bodyParser = require("body-parser")
const https = require("https")
const Student = require("./models/Student");
const mongoose = require("mongoose")
const valitator = require("validator")

const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.hltml")
})


//连接本地
//mongoose.connect("mongodb://localhost:27017/The_secondDB_created", {useNewUrlParser: true});

//利用altas的连接到应用
mongoose.connect("mongodb+srv://luozhongtain:lzt611789@cluster0.lg159.mongodb.net/The_secondDB_created?retryWrites=true&w=majority", {useNewUrlParser: true});

//在这个我文件中使用model里面的Student的Schema
app.post('/', (req,res)=>{
    const fitstname = req.body.fitst_name
    const lastname = req.body.last_name
    const email = req.body.email
//利用model里面的Student以创建自己的student
    const student = new Student({
        fname : fitst_name,
        lname : last_name,
        email : email
    })    
    
student
.save()
.catch((err) => console.log(err));

    if(res.statusCode == 200)
    {
        (res.sendFile(__dirname + "/success.html"))   
    }else{
        res.sendFile(__dirname + "/404.html")
    }
})

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8080;
}
//app.listen(process.env.PORT || 8080)
app.listen(port, (req,res) => {
    console.log("Server is running on port successfully")
})