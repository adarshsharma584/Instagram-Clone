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
        select:false,
    },
    profilePhoto: {
        type: String,
        default:""
    },
    avatar:{
        type: String,
        defualt:"",
    },
    bio:{
        type: String,
        defualt:"",
    },
    followers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  following: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
    likes:{
        type: Schema.Types.ObjectId,
        ref:"Post",
    },
    posts: {
        type: Schema.Types.ObjectId,
        ref:"Post",
    },
    savedPosts:{
        type: Schema.Types.ObjectId,
        ref:"Post",
    },
    reels: {
        type: Schema.Types.ObjectId,
        ref:"Reel",

    },
    stories: {
        type: Schema.Types.ObjectId,
        ref:"Story",
    },
    createdAt: {
    type: Date,
    default: Date.now
  }

},
    { timestamps: true }
);

userSchema.pre("save", function (next) {
    if (this.isModified("password")) {
        this.password = bcrypt.hashSync(this.password, 10);
    }
    next();
});

userSchema.methods.comparePassword = function(password){
    return bcrypt.compareSync(password, this.password);
}

userSchema.methods.generateAccessToken = async function () {
    const accessToken = await jwt.sign({
        _id: this._id,
        username:this.username,
        name:this.name,
        email:this.email,
    }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    });
    return accessToken;
};

userSchema.methods.generateRefreshToken = async function () {
    const refreshToken = await jwt.sign({
        _id: this._id,
    },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
        });
    return refreshToken;
};

export const User = mongoose.model("User", userSchema);