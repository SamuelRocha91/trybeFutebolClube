import SequelizeTeam from '../database/models/SequelizeTeam';
import { ITeam } from '../Interfaces/ITeam';
import { ITeamModel } from '../Interfaces/ITeamModel';

export default class TeamModel implements ITeamModel {
  private model = SequelizeTeam;

  async findAll(): Promise<ITeam[]> {
    const dbData = await this.model.findAll();
    const filterData = dbData.map(({ id, teamName }) => (
      { id, teamName }
    ));
    return filterData;
  }
}
