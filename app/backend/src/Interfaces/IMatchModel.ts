import { IMatch } from './IMatch';
import { NewEntity } from '.';

export interface IMatchModel {
  findAll(): Promise<IMatch[]>,
  findByInProgress(bool: boolean): Promise<IMatch[]>
  findById(id: IMatch['id']): Promise<IMatch | null>
  updateMatch(id: IMatch['id']): Promise<IMatch | null>,
  updateMatchScore(id: IMatch['id'], data: Partial<NewEntity<IMatch>>): Promise<IMatch | null>,
}
