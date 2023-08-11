import MatchModel from '../models/MatchModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import { IMatch } from '../Interfaces/IMatch';
import { IMatchModel } from '../Interfaces/IMatchModel';

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
}
