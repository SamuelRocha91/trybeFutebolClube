import { ILeaderboard } from '../Interfaces/ILeaderboard';
import { IMatch } from '../Interfaces/IMatch';

export default class GenerateLeaderboard {
  static goalsFavor(Matches: IMatch[], id: number, route: string): number {
    return Matches.reduce((acc: number, curr:IMatch) => {
      if (curr.awayTeamId === id && route === '/away') {
        const sum = acc + curr.awayTeamGoals;
        return sum;
      }
      if (curr.homeTeamId === id && route === '/home') {
        const sum = acc + curr.homeTeamGoals;
        return sum;
      }
      return acc;
    }, 0);
  }

  static goalsOwn(Matches: IMatch[], id: number, route: string): number {
    return Matches.reduce((acc: number, curr:IMatch) => {
      if (curr.awayTeamId === id && route === '/away') {
        const sum = acc + curr.homeTeamGoals;
        return sum;
      }
      if (curr.homeTeamId === id && route === '/home') {
        const sum = acc + curr.awayTeamGoals;
        return sum;
      }
      return acc;
    }, 0);
  }

  static totalGamesHome(Matches: IMatch[], id: number): number {
    return Matches.reduce((acc: number, curr:IMatch) => {
      if (curr.homeTeamId === id) {
        const sum = acc + 1;
        return sum;
      }
      return acc;
    }, 0);
  }

  static totalGamesAway(Matches: IMatch[], id: number): number {
    return Matches.reduce((acc: number, curr:IMatch) => {
      if (curr.awayTeamId === id) {
        const sum = acc + 1;
        return sum;
      }
      return acc;
    }, 0);
  }

  static totalVictoriesHome(Matches: IMatch[], id: number): number {
    let victories = 0;
    Matches.forEach(({ homeTeamId, homeTeamGoals, awayTeamGoals }) => {
      if (homeTeamId === id && homeTeamGoals > awayTeamGoals) {
        victories += 1;
      }
    });
    return victories;
  }

  static totalVictoriesAway(Matches: IMatch[], id: number): number {
    let victories = 0;
    Matches.forEach(({ awayTeamId, homeTeamGoals, awayTeamGoals }) => {
      if (awayTeamId === id && homeTeamGoals < awayTeamGoals) {
        victories += 1;
      }
    });
    return victories;
  }

  static totalDrawsHome(Matches: IMatch[], id: number): number {
    let draw = 0;
    Matches.forEach(({ homeTeamId, homeTeamGoals, awayTeamGoals }) => {
      if (homeTeamId === id && homeTeamGoals === awayTeamGoals) {
        draw += 1;
      }
    });
    return draw;
  }

  static totalDrawsAway(Matches: IMatch[], id: number): number {
    let draw = 0;
    Matches.forEach(({ awayTeamId, homeTeamGoals, awayTeamGoals }) => {
      if (awayTeamId === id && homeTeamGoals === awayTeamGoals) {
        draw += 1;
      }
    });
    return draw;
  }

  static totalLossesHome(Matches: IMatch[], id: number): number {
    let losses = 0;
    Matches.forEach(({ homeTeamId, homeTeamGoals, awayTeamGoals }) => {
      if (homeTeamId === id && homeTeamGoals < awayTeamGoals) {
        losses += 1;
      }
    });
    return losses;
  }

  static totalLossesAway(Matches: IMatch[], id: number): number {
    let losses = 0;
    Matches.forEach(({ awayTeamId, homeTeamGoals, awayTeamGoals }) => {
      if (awayTeamId === id && homeTeamGoals > awayTeamGoals) {
        losses += 1;
      }
    });
    return losses;
  }

  static totalPoints(Matches: IMatch[], id: number): number {
    const points = (this.totalVictoriesHome(Matches, id) * 3) + this.totalDrawsHome(Matches, id);
    return points;
  }

  static totalPointsAway(Matches: IMatch[], id: number): number {
    const points = (this.totalVictoriesAway(Matches, id) * 3) + this.totalDrawsAway(Matches, id);
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

  static orderByGoalsBalance(Leaderboard: ILeaderboard[]): ILeaderboard[] {
    return Leaderboard.sort((a: ILeaderboard, b: ILeaderboard) => {
      if (a.totalPoints === b.totalPoints && a.totalVictories === b.totalVictories) {
        return a.goalsBalance > b.goalsBalance ? -1 : 0;
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

  static efficiency(Matches: IMatch[], id: number): number {
    const efficiency = ((this.totalPoints(Matches, id)
        / (this.totalGamesHome(Matches, id) * 3)) * 100).toFixed(2);
    return Number(efficiency);
  }

  static efficiencyAway(Matches: IMatch[], id: number): number {
    const efficiency = ((this.totalPointsAway(Matches, id)
        / (this.totalGamesAway(Matches, id) * 3)) * 100).toFixed(2);
    return Number(efficiency);
  }

  static orderMatches(Leaderboard: ILeaderboard[]): ILeaderboard[] {
    const orderedByPoints = this.orderByTotalPoints(Leaderboard);
    const orderedByVictories = this.orderByTotalVictories(orderedByPoints);
    const orderedByGoalsBalance = this.orderByGoalsBalance(orderedByVictories);
    const orderedByGoals = this.orderByGoalsFavor(orderedByGoalsBalance);
    return orderedByGoals;
  }
}
