// src/routes/activity.ts
import { Router } from "express";
import activityController from "../controllers/activity";

const router = Router();

router.post('/create', activityController.create);
router.get('/list', activityController.list);
router.get('/detail/:id', activityController.detail);
router.put('/update/:id', activityController.update);
router.delete('/delete/:id', activityController.remove);

export { router as activityRouter };  

