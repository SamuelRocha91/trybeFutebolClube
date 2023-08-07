import { Request, Router, Response } from 'express';
import LoginController from '../controllers/LoginController';

const loginController = new LoginController();

const router = Router();

router.post('/', (req: Request, res: Response) => loginController.getAllTeams(req, res));

export default router;
