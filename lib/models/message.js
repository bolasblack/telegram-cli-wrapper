'use strict';

var BaseModel = require('./base_model');

module.exports = class Message extends BaseModel {
  constructor(data, connection) {
    super(data);
    this.connection = connection;
  }

  reply(message) {
    this.connection.reply(this.id, message);
  }

  forwardTo(peer) {
    this.connection.forward(this.id, peer);
  }
}
