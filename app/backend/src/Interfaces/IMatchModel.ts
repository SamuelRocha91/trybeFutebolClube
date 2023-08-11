import { IMatch } from './IMatch';

export interface IMatchModel {
  findAll(): Promise<IMatch[]>,
  findByInProgress(bool: boolean): Promise<IMatch[]>
}
