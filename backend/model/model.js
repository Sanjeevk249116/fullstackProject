const mongoose=require("mongoose");

const UserSchema=mongoose.Schema({
id:{type:Number,required:true},
title:{type:String,required:true},
sescription:{type:String,required:true},
quantity:{type:Number,required:true},
category:{type:String,required:true},
type:{type:String,required:true},
price:{type:Number,required:true},
})


const UserModel=mongoose.model("api",UserSchema);
module.exports={UserModel}