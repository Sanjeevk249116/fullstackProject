const express = require("express");
const{UserModel}=require("./model/model")
const { connection } = require("./config/connection");
const app = express();

app.get("/",async(req,res)=>{
    const data=await UserModel.find();
    res.send({msg:data});
})

app.listen(8080, async (req, res) => {
  try {
    await connection;
    console.log("connect");
  } catch (err) {
    console.log("not connect");
  }
  console.log("port 8080 are connected");
});
