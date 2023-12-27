import { UserController } from "./user.controller";
import express from 'express'
const router = express.Router()
// update user
router.patch('/:id',
  UserController.updateUser);

// delete user
router.delete('/:id', UserController.deleteUser);
router.get('/:id/wishlist', UserController.getUserWishlist)
router.get('/:id/readinglist', UserController.getUserReadingList)

router.get('/', UserController.getAllUsers);

export const UserRoutes = router