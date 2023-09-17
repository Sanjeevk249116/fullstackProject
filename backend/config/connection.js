const mongoose=require("mongoose");

const connection=mongoose.connect("mongodb+srv://sanjeevk249116:mNSNQTbbjZVMceiv@cluster0.fuiq3oj.mongodb.net/furniture");

module.exports={connection}