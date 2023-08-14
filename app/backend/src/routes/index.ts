import { Router } from 'express';
import teamRouter from './team.routes';
import loginRouter from './login.routes';
import matchRouter from './matchRoutes';
import leaderboardRouter from './leaderboard.routes';

const router = Router();

router.use('/teams', teamRouter);
router.use('/login', loginRouter);
router.use('/matches', matchRouter);
router.use('/leaderboard', leaderboardRouter);

export default router;
