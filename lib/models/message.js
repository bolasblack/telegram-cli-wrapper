'use strict';

var BaseModel = require('./base_model');

module.exports = class Message extends BaseModel {
  constructor(data, connection) {
    super(data);
    this.connection = connection;
  }

  reply(message) {
    this.connection.executeCommand(`reply ${this.id} ${message}`);
  }

  forwardTo(userPrintName) {
    this.connection.executeCommand(`fwd ${userPrintName} ${this.id}`);
  }
}
