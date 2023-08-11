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

  async findById(id: IMatch['id']): Promise<IMatch | null> {
    const dbData = await this.model.findByPk(id);
    if (dbData == null) return null;

    const {
      homeTeamId,
      homeTeamGoals,
      awayTeamId,
      awayTeamGoals,
      inProgress }: IMatch = dbData;
    return {
      id,
      homeTeamId,
      homeTeamGoals,
      awayTeamId,
      awayTeamGoals,
      inProgress,
    };
  }

  async updateMatch(id: number): Promise<IMatch | null> {
    const [affectedRows] = await this.model.update({ inProgress: false }, { where: { id } });
    if (affectedRows === 0) return null;

    return this.findById(id);
  }
}
