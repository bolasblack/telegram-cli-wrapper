telegram-cli-wrapper
===================
[![Build Status](https://travis-ci.org/tincann/telegram-cli-wrapper.svg)](https://travis-ci.org/tincann/telegram-cli-wrapper)

Nodejs wrapper that communicates with the Telegram API.

Underlyingly makes use of telegram-cli (https://github.com/vysheng/tg).

##Installation

1. To run it locally run the following command:

 `git clone --recursive git@github.com:bolasblack/telegram-cli-wrapper.git telegram-cli-nodejs`

  The `--recursive` argument is important, as it will also install the submodules of tg.

2. Install libs: readline, openssl and (if you want to use config) libconfig, liblua, python and libjansson.

  Follow the [document](https://github.com/vysheng/tg#installation) of `tg` to install.

3. Then run:

  `npm install`

 This will compile the code in the included tg submodule into the `tg/bin` directory.

##Running it the first time

While in the root of this project, first run the binary in the `tg/bin` directory by doing:

`./tg/bin/telegram-cli -k tg/server.pub`

Then you should set up access to a telegram account by following the steps in the cli. Please refer to the README of the cli (https://github.com/vysheng/tg).

After this is done you can use the TelegramAPI object in the lib directory. Usage example:

```javascript
var tgapi = require('telegram-cli-nodejs');

tgapi.connect(function(connection){
  connection.on('online', function(onlineStatus){
  });
  connection.on('offline', function(offlineStatus){
  });
  connection.on('message', function(message){
  });
  connection.on('updates', function(updatesStatus){
  });
});
```

[Event data struct](https://github.com/bolasblack/telegram-json-struct)

##Windows

Haven't tested this for Windows (yet)
