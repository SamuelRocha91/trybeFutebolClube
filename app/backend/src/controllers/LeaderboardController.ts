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
      totalGames: GenerateLeaderboard.totalGames(matchList, id),
      goalsFavor: GenerateLeaderboard.goalsFavor(matchList, id),
      goalsOwn: GenerateLeaderboard.goalsOwn(matchList, id),
      goalsBalance: GenerateLeaderboard
        .goalsFavor(matchList, id) - GenerateLeaderboard.goalsOwn(matchList, id),
      totalVictories: GenerateLeaderboard.totalVictories(matchList, id),
      totalLosses: GenerateLeaderboard.totalLosses(matchList, id),
      totalDraws: GenerateLeaderboard.totalDraws(matchList, id),
      totalPoints: GenerateLeaderboard.totalPoints(matchList, id),
      efficiency: (GenerateLeaderboard.totalPoints(matchList, id)
        / (GenerateLeaderboard.totalGames(matchList, id) * 3)) / 100 }));
    const orderedMatches = GenerateLeaderboard.orderMatches(leaderboard);
    return res.status(200).json(orderedMatches);
  }
}
