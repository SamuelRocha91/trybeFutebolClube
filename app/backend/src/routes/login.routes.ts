import { Request, Router, Response } from 'express';
import AuthController from '../controllers/AuthController';

const loginController = new AuthController();

const router = Router();

router.post('/', (req: Request, res: Response) => loginController.login(req, res));

export default router;
