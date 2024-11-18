import { Router } from "express";
import person_activityController from "../controllers/person_activity";
import { authenticated } from "../middlewares/authenticated";

const router = Router();

router.post('/create', authenticated, person_activityController.create);
router.get('/list', authenticated, person_activityController.list);
router.delete('/delete/:id', authenticated, person_activityController.remove);

export { router as person_activityRouter };