var Message = require('../models/message.js');
var messageEvents = 'message service read'.split(' ');

module.exports = function parseMessage(string, connection) {
  var result;

  try {
    result = JSON.parse(string);
  } catch (err) {
  }

  if(!result) return false;

  if (messageEvents.indexOf(result.event) > -1) {
    connection.emit('message', new Message(result, connection));
  } else if (result.event === 'online-status') {
    connection.emit(result.online ? 'online' : 'offline', result);
  } else if (result.event === 'updates') {
    connection.emit('updates', result);
  } else if (Array.isArray(result) && result.every(isUserPeer)) {
    connection.contacts = result;
  }
};

function isUserPeer(peer) {
  if (!peer) { return false; }
  return peer.type === 'user';
}
