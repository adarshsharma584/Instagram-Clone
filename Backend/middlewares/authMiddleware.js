import jwt from "jsonwebtoken";



import { User } from "../models/userModel.js";

export const verifyJWT = async (req, res, next) => {
    try {
        console.log(req.cookies);
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
        
        console.log("token from cookie:", token);
        if (!token) {
          return res.status(401).json({
            msg: "No token provided",
          });
        }
    
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
    
        if (!user) {
            res.status(400).json({
                msg: "Invalid access token",
            });
            
        }
    
        req.user = user;
        next()
    } catch (error) {
        res.status(400).json({
            msg: "Invalid refresh token"
        })
    }
    
};
// export const jwtVerify = async (req, res, next) => {
//     console.log(req.cookies);
//     console.log(req.headers.authorization);
//     const token = req.cookies?.accessToken || req.headers.authorization?.replace("Bearer ", "");
//     console.log(token);

//     if (!token) return res.status(401).json({ message: "No token provided" });
//     try {
//         const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = decodedToken;
//         next();
//     } catch (error) {
//         return res.status(401).json({ message: "Invalid token" });
//     }
// };