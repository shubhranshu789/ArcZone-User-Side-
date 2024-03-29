const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types

const merchantSchema = new mongoose.Schema({
    name : {
        type:String,
        require:true
    },
    userName:{
        type: String,
        require:true
    },
    email:{
        type: String,
        require:true
    },
    password:{
        type: String,
        require:true
    },
    address:{
        type: String,
        require:true
    },
    phone:{
        type: Number,
        require:true
    },

    //add IP
    ip:{
        type: String,
        require:true
    },
    order : [
        {
            userId : {
                type : ObjectId,
                ref : "USER"
            },
            merchantId : {
                type : ObjectId,
                ref : "MERCHANT"
            },
            productId : {
                type : ObjectId,
                ref : "PRODUCT"
            },
            productName : String,
            productPrice : Number,
            merchantName : String,
            productpic : String,
            customerName :String ,
            userEmail : String,
            userPhone : Number,
            userAddress : String,
            quantity : Number,
            size : Number,
        }
    ]
})

mongoose.model("MERCHANT" , merchantSchema)