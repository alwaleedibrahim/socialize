const mongoose = require("mongoose")
const validator = require('validator')
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({

    firstName:{
        type:String,
        trim:true,
        required:true
    },

    lastName:{
        type:String,
        trim:true,
        required:true
    },

    email:{
        type:String,
        trim:true,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error("invalid email format")
        }
    },

    password:{
        type:String,
        trim:true,
        required:true
    },

    age:{
        type:Number,
        min:13
    },

    gender:{
        type:String,
        trim:true,
        enum:["male", "female"]
    },

    bio: {
        type:String,
        trim:true
    },

    location: {
        type:String,
        trim:true
    },

    img:{
        type:String
    },

    posts: [
        { 
            body: String, 
            date: Date,
            likes: {
                type: Number,
                default: 0
            }
        }
    ],

    tokens:[ 
        {
            token:{
                type:String, 
                required:true
            }
        } 
    ],

})


userSchema.pre("save", async function(){
    const user = this
    if(user.isModified("password"))
        user.password = await bcryptjs.hash(user.password, 12)
})

userSchema.statics.loginUser = async(email,password)=>{
    const user = await User.findOne({email})
    if(!user) throw new Error("invalid user email")
    const isValid = await bcryptjs.compare(password, user.password)
    if(!isValid) throw new Error("invalid password")
    return user
}

userSchema.methods.generateToken = async function(){
    const user = this
    const token = jwt.sign({_id:user._id}, "jwtSecret")
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}


const User = mongoose.model("User", userSchema)
module.exports = User