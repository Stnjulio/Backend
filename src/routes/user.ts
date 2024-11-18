import { Router } from "express";
import userController from "../controllers/user";
import { authenticated } from "../middlewares/authenticated";

const router = Router();

router.post('/create', userController.create);
router.get('/list', authenticated, userController.list);
router.get('/detail/:id', authenticated, userController.detail);
router.put('/update/:id', authenticated, userController.update);
router.delete('/delete/:id', authenticated, userController.remove);

export { router as userRouter };
