// src/database/migrations/01-create-users.ts

import { Model, QueryInterface, DataTypes } from 'sequelize'; 

 import { Team } from '../../types/Team';

export default { 
  up(queryInterface: QueryInterface) { 
    return queryInterface.createTable<Model<Team>>('teams', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      teamName: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'team_name',
      },
    }) 
  }, 
  
  down(queryInterface: QueryInterface) { 
    return queryInterface.dropTable('teams') 
  } 
};