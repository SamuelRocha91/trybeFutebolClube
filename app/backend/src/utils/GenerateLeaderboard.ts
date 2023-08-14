import { ILeaderboard } from '../Interfaces/ILeaderboard';
import { IMatch } from '../Interfaces/IMatch';

export default class GenerateLeaderboard {
  static goalsFavor(Matches: IMatch[], id: number): number {
    return Matches.reduce((acc: number, curr:IMatch) => {
      if (curr.awayTeamId === id) {
        const sum = acc + curr.awayTeamGoals;
        return sum;
      }
      if (curr.homeTeamId === id) {
        const sum = acc + curr.awayTeamGoals;
        return sum;
      }
      return acc;
    }, 0);
  }

  static goalsOwn(Matches: IMatch[], id: number): number {
    return Matches.reduce((acc: number, curr:IMatch) => {
      if (curr.awayTeamId === id) {
        const sum = acc + curr.homeTeamGoals;
        return sum;
      }
      if (curr.homeTeamId === id) {
        const sum = acc + curr.awayTeamGoals;
        return sum;
      }
      return acc;
    }, 0);
  }

  static totalGames(Matches: IMatch[], id: number): number {
    return Matches.reduce((acc: number, curr:IMatch) => {
      if (curr.awayTeamId === id || curr.homeTeamId === id) {
        const sum = acc + 1;
        return sum;
      }
      return acc;
    }, 0);
  }

  static totalVictories(Matches: IMatch[], id: number): number {
    let victories = 0;
    Matches.forEach(({ homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals }) => {
      if (homeTeamId === id && homeTeamGoals > awayTeamGoals) {
        victories += 1;
      }
      if (awayTeamId === id && homeTeamGoals > awayTeamGoals) {
        victories += 1;
      }
    });
    return victories;
  }

  static totalDraws(Matches: IMatch[], id: number): number {
    let draw = 0;
    Matches.forEach(({ homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals }) => {
      if (homeTeamId === id && homeTeamGoals === awayTeamGoals) {
        draw += 1;
      }
      if (awayTeamId === id && homeTeamGoals === awayTeamGoals) {
        draw += 1;
      }
    });
    return draw;
  }

  static totalLosses(Matches: IMatch[], id: number): number {
    let losses = 0;
    Matches.forEach(({ homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals }) => {
      if (homeTeamId === id && homeTeamGoals < awayTeamGoals) {
        losses += 1;
      }
      if (awayTeamId === id && awayTeamGoals < homeTeamGoals) {
        losses += 1;
      }
    });
    return losses;
  }

  static totalPoints(Matches: IMatch[], id: number): number {
    const points = (this.totalVictories(Matches, id) * 3) + this.totalDraws(Matches, id);
    return points;
  }

  static orderByTotalPoints(Leaderboard: ILeaderboard[]): ILeaderboard[] {
    return Leaderboard.sort((a: ILeaderboard, b: ILeaderboard) => b.totalPoints - a.totalPoints);
  }

  static orderByTotalVictories(Leaderboard: ILeaderboard[]): ILeaderboard[] {
    return Leaderboard.sort((a: ILeaderboard, b: ILeaderboard) => {
      if (a.totalPoints === b.totalPoints) {
        return a.totalVictories > b.totalVictories ? -1 : 0;
      }
      return 0;
    });
  }

  static orderByEfficiency(Leaderboard: ILeaderboard[]): ILeaderboard[] {
    return Leaderboard.sort((a: ILeaderboard, b: ILeaderboard) => {
      if (a.totalPoints === b.totalPoints && a.totalVictories === b.totalVictories) {
        return a.efficiency > b.efficiency ? -1 : 0;
      }
      return 0;
    });
  }

  static orderByGoalsFavor(Leaderboard: ILeaderboard[]): ILeaderboard[] {
    return Leaderboard.sort((a: ILeaderboard, b: ILeaderboard) => {
      if (a.totalPoints === b.totalPoints
        && a.totalVictories === b.totalVictories && a.efficiency === b.efficiency) {
        return a.goalsFavor > b.goalsFavor ? -1 : 0;
      }
      return 0;
    });
  }

  static orderMatches(Leaderboard: ILeaderboard[]): ILeaderboard[] {
    const orderedByPoints = this.orderByTotalPoints(Leaderboard);
    const orderedByVictories = this.orderByTotalVictories(orderedByPoints);
    const orderedByEfficiency = this.orderByEfficiency(orderedByVictories);
    const orderedByGoals = this.orderByGoalsFavor(orderedByEfficiency);
    return orderedByGoals;
  }
}
