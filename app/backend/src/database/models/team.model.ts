import { Team } from '../../../src/types/Team';
import { DataTypes, ModelDefined, Optional } from 'sequelize';
import db from './index';

export type TeamInputtableFields = Optional<Team, 'id'>;

type TeamSequelizeModelCreator = ModelDefined<Team, TeamInputtableFields>;

const TeamModel: TeamSequelizeModelCreator = db.define('Team', {
    team_name: DataTypes.STRING,
  }, {
    tableName: 'teams',
    timestamps: false,
    underscored: true,
  });
  
  export default TeamModel;