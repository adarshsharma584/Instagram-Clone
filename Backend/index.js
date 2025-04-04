import express from "express";
import {ConnectDB } from "./services/connectDB.js";
import userRouter from "./routes/user.js";


const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
ConnectDB();

// routes --->

app.use("/api/auth", userRouter);

app.listen(PORT, () => {
    console.log("Server is running on port :", PORT);
 })
