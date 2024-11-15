// src/routes/user.ts
import { Router } from "express";
import userController from "../controllers/user";

const router = Router();

router.post('/create', userController.create);
router.get('/list', userController.list);
router.get('/detail/:id', userController.detail);
router.put('/update/:id', userController.update);
router.delete('/delete/:id', userController.remove);

export { router as userRouter };  