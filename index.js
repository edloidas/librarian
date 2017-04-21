const botkit = require('botkit');
const { token, port, settings } = require('./src/config');
const message = require('./src/message');

const controller = botkit.slackbot(settings);

const slackBot = controller.spawn({ token });

// Bind recieved message handler
controller.hears(message.ping.regexp, message.ping.type, (bot, msg) => {
  bot.reply(msg, message.ping.reply);
});

// Start bot in Real-Time Messaging mode
slackBot.startRTM();

/*
HACK
Heroku needs an active connection on port.
Otherwise, running app wil be shutted down.
*/
controller.setupWebserver(port, () => {});
