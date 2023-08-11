import { IMatch } from './IMatch';

export interface IMatchModel {
  findAll(): Promise<IMatch[]>,
  findByInProgress(bool: boolean): Promise<IMatch[]>
  findById(id: IMatch['id']): Promise<IMatch | null>
  updateMatch(id: IMatch['id']): Promise<IMatch | null>,
}
