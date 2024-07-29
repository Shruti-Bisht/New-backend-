import { Router } from "express";
import { registerUsers } from "../controllers/users.controllers.js";

const router = Router();

router.post('/register',registerUsers);

export default router ;