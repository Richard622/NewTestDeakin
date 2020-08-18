const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/MONGO_FILES", {useNewUrlParser:true})
//连接本地的数据库


//创建一个储层的模式（有哪些类型和名字）
const unitSchema = new mongoose.Schema(
    {
        Course_ID:String,
        Name:String,
        P_number:Number
    }
)

//有了模式（框架），就可以往里放东西了
const Unit = mongoose. model('Unit', unitSchema)//定义Unit这个词为刚刚的模式的代言
const unit1 = new Unit(
    {
        Course_ID:'m3333h',
        Name:'ca33333ers',
        P_number:53339
    }
)
const unit2 = new Unit(
    {
        Course_ID:'IOT',
        Name:'IT',
        P_number:111
    }
)

// //定义一个数组，以存放
// const unitArray = [unit1,unit2];

// Unit.insertMany(unitArray , (err)=>{
//     if(err)
//     {
//         console.log(err)
//     }else{
//         console.log("SUC for 2 units!")
//     }
// })//此处如果第二次运行会报错，因为不能添加多个相同的ID


//寻找刚刚放入的unit是否成功
Unit.find((err, units)=>{
    if(err)
    {
        console.log(err)
    }else{
        console.log(units)
    }
})