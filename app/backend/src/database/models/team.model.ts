import { DataTypes, ModelDefined, Optional } from 'sequelize';
import { Team } from '../../types/Team';
import db from './index';

export type TeamInputtableFields = Optional<Team, 'id'>;

type TeamSequelizeModelCreator = ModelDefined<Team, TeamInputtableFields>;

const TeamModel: TeamSequelizeModelCreator = db.define('Team', {
  teamName: DataTypes.STRING,
}, {
  tableName: 'teams',
  timestamps: false,
  underscored: true,
});
 
export default TeamModel;
