import { required, string, types } from "joi"
import mongoose from "mongoose"
const userSchema=mongoose.schema({
    email:{
        type:string,
        required:[true,"Email required"],
        trim:true,
        unique:[true,"Email must be unique"],
        minLength:[5,"Email must have 5 Characters"],
        lowercase:true
    },
    password:{
        type:string,
        required:[true,"Password must be provided"],
        trim:true,
        select:false
    },
    verified:{
        type:Boolean,
        default:false
    },
    verificationcode:{
        type:string,
        select:false

    },
    verificationcodevalidation:{
        type:Number,
        select:false
    },
    forgotpasscode:{
        type:string,
        select:false

    },
    forgotpasswordcodevalidation:{
        type:Number,
        select:false

    }
},{
    timestamps:true
})
export const user=mongoose.model("user",userSchema)