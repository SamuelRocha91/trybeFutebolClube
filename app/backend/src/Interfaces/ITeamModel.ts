import { ITeam } from './ITeam';

export interface ITeamModel {
  findAll(): Promise<ITeam[]>
}
