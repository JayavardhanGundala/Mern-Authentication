import { required, string } from "joi"
import mongoose, { Types } from "mongoose"
const postSchema=monggose.schema({
    title:{
        type:string,
        required:[ true,"title is required"],
        trim:true
    },
    description:{
        type:string,
        required:[true,"description is required"],
        trim:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    }
},{
    timestamps:true
})
export const user=mongoose.model("user",postSchema)