const bluebird = require('bluebird');

const config = {
  token: process.env.TOKEN,
  port: process.env.PORT || 5000,
  github: {
    protocol: 'https',
    host: 'api.github.com',
    Promise: bluebird,
    timeout: 10000,
  },
  settings: {
    debug: false,
    send_via_rtm: true,
    json_file_store: './db',
  },
};

module.exports = config;
