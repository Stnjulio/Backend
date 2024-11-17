// src/routes/auth.ts
import { Router } from "express";
import authController from "../controllers/auth";

const router = Router();

router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.post('/verify', authController.verifyUser);  

export { router as authRouter };  