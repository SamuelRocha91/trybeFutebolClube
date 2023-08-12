import MatchModel from '../models/MatchModel';
import { ServiceMessage, ServiceResponse } from '../Interfaces/ServiceResponse';
import { IMatch } from '../Interfaces/IMatch';
import { IMatchModel } from '../Interfaces/IMatchModel';
import { NewEntity } from '../Interfaces';

export default class MatchService {
  constructor(
    private matchModel: IMatchModel = new MatchModel(),
  ) { }

  public async getAllMatches(): Promise<ServiceResponse<IMatch[]>> {
    const allBooks = await this.matchModel.findAll();
    return { status: 'SUCCESSFUL', data: allBooks };
  }

  public async getMatchesByInProgress(bool: boolean): Promise<ServiceResponse<IMatch[]>> {
    const allMatchesFiltered = await this.matchModel.findByInProgress(bool);
    return { status: 'SUCCESSFUL', data: allMatchesFiltered };
  }

  public async updateMatchById(id: number): Promise<ServiceResponse<ServiceMessage>> {
    const mactchUpdated = await this.matchModel.updateMatch(id);
    if (!mactchUpdated) return { status: 'NOT_FOUND', data: { message: `Book ${id} not found` } };

    return { status: 'SUCCESSFUL', data: { message: 'Book updated' } };
  }

  public async updateMatchInProgress(
    id: number,
    match: IMatch,
  ): Promise<ServiceResponse<ServiceMessage>> {
    const matchFound = await this.matchModel.findById(id);
    if (!matchFound) return { status: 'NOT_FOUND', data: { message: `Match ${id} not found` } };

    const updatedMatch = await this.matchModel.updateMatchScore(id, match);
    if (!updatedMatch) {
      return { status: 'CONFLICT',
        data: { message: `There are no updates to perform in match ${id}` } };
    }
    return { status: 'SUCCESSFUL', data: { message: 'Match updated' } };
  }

  public async createMatch(match: NewEntity<IMatch>): Promise<ServiceResponse<IMatch>> {
    const newMatch = await this.matchModel.create(match);
    return { status: 'SUCCESSFUL', data: newMatch };
  }
}
