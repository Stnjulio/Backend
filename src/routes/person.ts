import { Router } from "express";
import personController from "../controllers/person";
import { authenticated } from "../middlewares/authenticated";

const router = Router();

router.post('/create', authenticated, personController.create);
router.get('/list', authenticated, personController.list);
router.get('/detail/:id', authenticated, personController.detail);
router.put('/update/:id', authenticated, personController.update);
router.delete('/delete/:id', authenticated, personController.remove);

export { router as personRouter };
