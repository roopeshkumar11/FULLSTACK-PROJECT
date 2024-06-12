const mongoose=require("mongoose")

const EmployeeScheme= new  mongoose.Schema({
    email:String,
    password:String,
    cnfpassword:String
})


const EmployeeModel=mongoose.model("employee",EmployeeScheme)
module.exports=EmployeeModel