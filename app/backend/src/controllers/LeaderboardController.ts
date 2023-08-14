import { Request, Response } from 'express';
import MatchModel from '../models/MatchModel';
import TeamModel from '../models/TeamModel';
import GenerateLeaderboard from '../utils/GenerateLeaderboard';

export default class LeaderboardController {
  constructor(
    private matchModel = new MatchModel(),
    private teamModel = new TeamModel(),
  ) {}

  public async getAllLeaderBoard(req: Request, res: Response) {
    const teamList = await this.teamModel.findAll();
    const matchList = await this.matchModel.findByInProgress(false);
    const leaderboard = teamList.map(({ id, teamName }) => ({
      name: teamName,
      totalGames: GenerateLeaderboard.totalGamesHome(matchList, id),
      goalsFavor: GenerateLeaderboard.goalsFavor(matchList, id, '/home'),
      goalsOwn: GenerateLeaderboard.goalsOwn(matchList, id, '/home'),
      goalsBalance: GenerateLeaderboard
        .goalsFavor(matchList, id, '/home') - GenerateLeaderboard.goalsOwn(matchList, id, '/home'),
      totalVictories: GenerateLeaderboard.totalVictoriesHome(matchList, id),
      totalLosses: GenerateLeaderboard.totalLossesHome(matchList, id),
      totalDraws: GenerateLeaderboard.totalDrawsHome(matchList, id),
      totalPoints: GenerateLeaderboard.totalPoints(matchList, id),
      efficiency: GenerateLeaderboard.efficiency(matchList, id) }));
    const orderedMatches = GenerateLeaderboard.orderMatches(leaderboard);
    return res.status(200).json(orderedMatches);
  }
}
