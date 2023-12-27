import { UserController } from "./user.controller";
import express from 'express'
const router = express.Router()

router.get('/', UserController.getAllUsers);

export const UserRoutes = router