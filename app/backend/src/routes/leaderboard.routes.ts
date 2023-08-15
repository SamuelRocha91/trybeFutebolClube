import { Request, Router, Response } from 'express';
import LeaderboardController from '../controllers/LeaderboardController';

const router = Router();
const leaderboardController = new LeaderboardController();

router.get(
  '/home',
  (req: Request, res: Response) => leaderboardController.getAllLeaderBoard(req, res),
);

router.get(
  '/away',
  (req: Request, res: Response) => leaderboardController.getAllLeaderBoardAway(req, res),
);

router.get(
  '/',
  (req: Request, res: Response) => leaderboardController.getLeaderBoard(req, res),
);
export default router;
