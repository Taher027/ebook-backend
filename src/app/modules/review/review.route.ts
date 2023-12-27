import express from 'express';
import { ReviewController } from './review.controller';

const router = express.Router();

// create book
  router.post(
    '/add-new',
   ReviewController.addReview
  );
  
  // get all reviews
  router.get('/:bookId', ReviewController.getAllReviews);


  export const ReviewRoutes = router;