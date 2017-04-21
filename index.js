// Require libraries.
const botkit = require('botkit');
const { token } = require('./src/config');

// Create slackbot controller.
const controller = botkit.slackbot({
  debug: false,
  send_via_rtm: true,
  json_file_store: './db',
});

// Create the slackbot.
const slackBot = controller.spawn({ token });

// Listen for a direct message.
controller.hears([/^hello robot$/i], ['direct_message'], (bot, message) => {
  bot.reply(message, 'Hello Human!');
});

// Start real-time messaging.
slackBot.startRTM();
