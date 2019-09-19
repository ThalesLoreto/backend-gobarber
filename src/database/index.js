import Sequelize from 'sequelize';

import Users from '../app/models/User';
import Files from '../app/models/Files';
import Appointment from '../app/models/Appointment';

import databaseConfig from '../config/database';

const models = [Users, Files, Appointment];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
