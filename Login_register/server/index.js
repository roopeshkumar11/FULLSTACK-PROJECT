const express=require("express")
const mongoose=require("mongoose")

const cors=require("cors")
const EmployeeModel=require("./modals/employee.js")

const app=express() 
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb://127.0.0.1:27017/employeee")


app.post("/register",(req,res)=>{
    EmployeeModel.create(req.body)
    .then(respond=>res.json(respond))
    .catch(err=>res.json(err))

})

app.post("/login",(req,res)=>{
    let {email,password}=req.body
    EmployeeModel.findOne({email:email})
    .then(respond=>{
        if(respond){
            console.log("find")
            if(respond.password===password){
                res.json("Success")
               
            }
            else{
                res.json("incorrect password")

            }
        }

        else{
            res.json("not record exit")
            console.log(" not find")
        }
    })
    .catch(err=>{
        res.json(err)
    })
})
app.listen(3001,()=>{
    console.log("sever is listening 3001")
})