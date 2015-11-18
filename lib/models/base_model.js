'use strict';

module.exports = class BaseModel {
  constructor(data) {
    Object.keys(data).forEach(function(key) {
      this[key] = data[key];
    }, this);
  }
}
