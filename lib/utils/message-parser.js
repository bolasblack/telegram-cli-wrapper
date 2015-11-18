var Message = require('../models/Message.js');

var messageEvents = 'message service read'.split(' ');

var parseMessage = function(string, connection) {
  var result;

  try {
    result = JSON.parse(string);
  } catch (err) {
  }

  if(!result) return false;

  if (messageEvents.indexOf(result.event) > -1) {
    connection.emit('message', result);
  } else if (result.event === 'online-status') {
    connection.emit(result.online ? 'online' : 'offline', result)
  } else if (result.event === 'updates') {
    connection.emit('updates', result)
  }
};

module.exports = parseMessage;
