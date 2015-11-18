'use strict';

var util = require('util'),
    events = require('events'),
    parse = require('../utils/message-parser.js');

module.exports = class APIConnection extends events.EventEmitter {
  constructor(socket) {
    super();
    this.socket = socket;
    registerEvents.call(this, socket);
    this.open = true;
  }

  close() {
    if (this.open) {
      this.open = false;
      this.socket.end();
    }
  }

  executeCommand() {
    if (this.open) {
      var args = Array.prototype.slice.call(arguments);
      var cmd = args.join(' ');
      console.log('executing command:', cmd);
      this.socket.writeLine(cmd);
    } else {
      throw new Error('Api connection closed');
    }
  }

  send(peer, message) {
    this.executeCommand('msg', peer, message);
  }

  sendImage(peer, path) {
    this.executeCommand('send_photo', peer, '"' + path + '"');
  }

  sendDocument(peer, path) {
    this.executeCommand('send_document', peer, '"' + path + '"');
  }
}

function registerEvents(socket) {
  socket.on('line', function(line){
    parse(line, this);
  }.bind(this));

  socket.on('error', function(e){
    this.emit('error', e);
  }.bind(this));

  socket.on('close', function(){
    this.emit('disconnect');
  }.bind(this));
}
