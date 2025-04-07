import {Router} from "express";
import {verifyJWT} from "../middlewares/authMiddleware.js";
import { loginUser,registerUser,logoutUser } from "../controllers/auth.js";

const router = Router();

router.route("/").post(registerUser);

router.route("/login").post(loginUser);

router.route("/logout").post(verifyJWT, logoutUser);

export default router;
 
