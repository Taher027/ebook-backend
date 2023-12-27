import { UserController } from "./user.controller";
import express from 'express'
const router = express.Router()

router.get('/:id/wishlist', UserController.getUserWishlist)
router.get('/:id/readinglist', UserController.getUserReadingList)

router.get('/', UserController.getAllUsers);

export const UserRoutes = router