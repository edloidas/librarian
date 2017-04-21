const botkit = require('botkit');
const { token } = require('./src/config');

const controller = botkit.slackbot({
  debug: false,
  send_via_rtm: true,
  json_file_store: './db',
});

const slackBot = controller.spawn({ token });

controller.hears([/^hello robot$/i], ['direct_message'], (bot, message) => {
  bot.reply(message, 'Hello Team!');
});

slackBot.startRTM();
