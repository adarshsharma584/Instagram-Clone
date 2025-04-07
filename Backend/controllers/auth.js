import {User} from "../models/userModel.js";

const generateAccessAndRefereshTokens = async(userId) =>{
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return {accessToken, refreshToken}
    }catch (error) {
        console.error("Error generating tokens:", error);
        throw error;
    }
}

const registerUser = async (req, res) => {
  const { username, email, password, name } = req.body;

  if ([username, email, password, name].some((field) => field?.trim() === "")) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const userExists = await User.findOne({
    $or: [{ email }, { username }],
  });

  if (userExists)
    return res.status(400).json({ message: "User already exists" });

  const user = await User.create({
    username,
    email,
    password,
    name,
  });

  res.status(201).json({
    msg: "user created successfully",
    data: user,
    success: true,
  });
};

const loginUser = async (req, res) => {
  
    const { username, password } = req.body;

  if ([username, password].some((field) => field?.trim() === "")) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const user = await User.findOne({ username });
  if (!user) return res.status(400).json({ message: "Invalid credentials" });

  const isMatch = await user.comparePassword(password);
  if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

  const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(
    user._id
  );

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken "
    );
    
  if (!loggedInUser) return res.status(404).json({ message: "User not found" });

  const options = {
    httpOnly: true,
    secure: true,
  };

     res.status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json({
            msg: "user logged in successfully",
            user: loggedInUser,
            data: { accessToken, refreshToken },
            success: true,
        });
    console.log("req.cookies:", req.cookies);
};

   

const logoutUser = async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $unset: {
        refreshToken: 1, // this removes the field from document
      },
    },
    {
      new: true,
    }
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json({msg:"user logged out successfully"});
};

const refreshAccessToken = async (req, res) => {
    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken

    if (!incomingRefreshToken) {
        res.status(401).json({
            msg:"Unauthorized request",
        })
    }

    try {
        const decodedToken = jwt.verify(
            incomingRefreshToken,
            process.env.REFRESH_TOKEN_SECRET
        )
    
        const user = await User.findById(decodedToken?._id)
    
        if (!user) {
            res.status(400).json({
                msg: "Invalid refresh token",
            })
        }
    
        if (incomingRefreshToken !== user?.refreshToken) {
            res.status(400).json({
                msg:"refresh token is expired or invalid",
            })
            
        }
    
        const options = {
            httpOnly: true,
            secure: true
        }
    
        const {accessToken, newRefreshToken} = await generateAccessAndRefereshTokens(user._id)
    
        return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", newRefreshToken, options)
        .json(
           { msg:"refresh token regenerated",
            data:{
                accessToken,
                refreshToken:newRefreshToken,
            },}
        )
    } catch (error) {
        res.status(401).json({
            msg:"Invalid refresh token",
            error: error.message
        })
    }

}

export { registerUser, loginUser, logoutUser, refreshAccessToken };
