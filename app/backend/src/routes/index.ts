import { Router } from 'express';
import teamRouter from './teams.routes';

const router = Router();

router.use('/teams', teamRouter);

export default router;
