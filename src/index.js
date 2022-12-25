const express =require('express')
const mongoose=require('mongoose')
const route=require('./route/route')
const app=express()

app.use(express.json())

mongoose.set('strictQuery', true)
mongoose.connect('mongodb+srv://AyushPanday:AyushPan123@cluster0.eixapeq.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser:true})
.then(()=> console.log("MongoDB Connected"))
.catch((err)=> console.log(err))

const PORT=3001

app.listen(PORT,function (){
    console.log(`Connected on PORT`,PORT)
})

app.use('/',route)