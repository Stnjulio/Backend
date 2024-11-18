import { Router } from "express";
import activityController from "../controllers/activity";
import { authenticated } from "../middlewares/authenticated";

const router = Router();

router.post('/create', authenticated, activityController.create);
router.get('/list', authenticated, activityController.list);
router.get('/detail/:id', authenticated, activityController.detail);
router.put('/update/:id', authenticated, activityController.update);
router.delete('/delete/:id', authenticated, activityController.remove);

export { router as activityRouter };
