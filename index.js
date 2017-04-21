const botkit = require('botkit');
const { token, port, settings } = require('./src/config');
const message = require('./src/message');
const github = require('./src/github');

const controller = botkit.slackbot(settings);

const slackBot = controller.spawn({ token });

// Bind recieved message handler
controller.hears(message.ping.regexp, message.ping.type, (bot, msg) => {
  bot.reply(msg, message.ping.reply);
});

controller.hears(message.ghUsers.regexp, message.ghUsers.type, (bot, msg) => {
  github.getFollowingForUser('edloidas').then((data) => { bot.reply(msg, data); });
});

// Start bot in Real-Time Messaging mode
slackBot.startRTM();

/*
HACK
Heroku needs an active connection on port.
Otherwise, running app wil be shutted down.
*/
controller.setupWebserver(port, () => {});
