import express from 'express';
import { BookRoutes } from '../modules/book/book.route';
import { AuthRoutes } from '../modules/auth/auth';
import { UserRoutes } from '../modules/user/user.route';
import { ReviewRoutes } from '../modules/review/review.route';
const router = express.Router();

const moduleRoutes = [
  {
    path:'/auth',
    route:AuthRoutes
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/books',
    route: BookRoutes,
  },
  {
    path:"/reviews",
    route:ReviewRoutes
  }
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
