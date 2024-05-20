import express from 'express';
import {testController,registerController,loginController} from '../controllers/authController.js'
import { requireSignIn } from '../middleware/authMiddleware.js';
// router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController)

//LOGIN || POST
router.post("/login", loginController);

//test routes
router.get("/test", requireSignIn, testController);
export default router;