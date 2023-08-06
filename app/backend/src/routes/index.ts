import { Router } from 'express';
import teamRouter from './team.routes';

const router = Router();

router.use('/teams', teamRouter);

export default router;
