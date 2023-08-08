import { Request, Router, Response } from 'express';
import AuthController from '../controllers/AuthController';
import Validations from '../middlewares/Validations';

const loginController = new AuthController();

const router = Router();

router.post(
  '/',
  Validations.validateLogin,
  (req: Request, res: Response) => loginController.login(req, res),
);

export default router;
