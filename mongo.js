

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://testuser:test123@onlinefundtransfer.2xcw9jv.mongodb.net/OnlineFundTransfer")
.then(()=>{
    console.log("mongodb connected");
})
.catch(() => {
    console.log("failed");
})


const newSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("collection", newSchema);

module.exports=collection;