import { Request, Router, Response } from 'express';
import LeaderboardController from '../controllers/LeaderboardController';

const router = Router();
const leaderboardController = new LeaderboardController();

router.get(
  '/home',
  (req: Request, res: Response) => leaderboardController.getAllLeaderBoard(req, res),
);

export default router;
