import mongoose,{Schema} from "mongoose"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const userSchema = new Schema({

    username: {
        type: String,
        required: true,
        unique: true,
        trim:true,
        index:true,
    },
    email: {
        type:String,
        required: true,
        unique: true,
    },
    name: {
        type:String,
    },
    password:{
        type:String,
        required:true,
    },
        
    profilePhoto: {
        type: String,
        default:""
    },
    avatar:{
        type: String,
        default:"",
    },
    bio:{
        type: String,
        default:"",
    },
    followers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  following: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  posts: [{
        type: Schema.Types.ObjectId,
        ref:"Post",
  }],
    savedPosts:[{
        type: Schema.Types.ObjectId,
        ref:"Post",
  }],
    reels: [{
        type: Schema.Types.ObjectId,
        ref:"Reel",

  }],
    stories: [{
        type: Schema.Types.ObjectId,
        ref:"Story",
  }],
    refreshToken:{
        type: String,
    },

},
    { timestamps: true }
);

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
        
    const hashedPassword =  await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    next();
});

userSchema.methods.comparePassword = async function(password){
    return  await bcrypt.compare(password, this.password);
}

userSchema.methods.generateAccessToken =  function(){
    const accessToken = jwt.sign({
        _id: this._id,
        username:this.username,
        name:this.name,
        email:this.email,
    }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    });
    return accessToken;
};

userSchema.methods.generateRefreshToken = function () {
    const refreshToken = jwt.sign({
        _id: this._id,
    },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
        });
    return refreshToken;
};

export const User = mongoose.model("User", userSchema);