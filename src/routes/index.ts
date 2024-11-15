// src/routes/index.ts
import { Router } from "express";
import { personRouter } from "./person";
import { activityRouter } from "./activity";
import { userRouter } from "./user";
import { authRouter } from "./auth";

const router = Router();    

router.use('/person', personRouter )
router.use('/activity', activityRouter)
router.use('/user', userRouter)
router.use('/auth', authRouter) 

export{router}