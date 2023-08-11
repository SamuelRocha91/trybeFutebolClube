import SequelizeTeam from '../database/models/SequelizeTeam';
import { IMatch } from '../Interfaces/IMatch';
import { IMatchModel } from '../Interfaces/IMatchModel';
import SequelizeMatch from '../database/models/SequelizeMatch';

export default class MatchModel implements IMatchModel {
  private model = SequelizeMatch;

  async findAll(): Promise<IMatch[]> {
    const dbData = await this.model.findAll({ include: [{
      model: SequelizeTeam,
      as: 'homeTeam',
    }, { model: SequelizeTeam, as: 'awayTeam' }] });
    return dbData;
  }

  async findByInProgress(bool: boolean): Promise<IMatch[]> {
    const dbData = await this.model.findAll({ where: { inProgress: bool },
      include: [{
        model: SequelizeTeam,
        as: 'homeTeam',
      }, { model: SequelizeTeam, as: 'awayTeam' }] });
    return dbData;
  }
}
