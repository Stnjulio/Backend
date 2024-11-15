// src/routes/person.ts
import { Router } from "express";
import personController from "../controllers/person";

const router = Router();
router.post('/create', personController.create);
router.get('/list', personController.list);
router.get('/detail/:id', personController.detail);
router.put('/update/:id', personController.update);
router.delete('/delete/:id', personController.remove);

export { router as personRouter };  