const botkit = require('botkit');
const { token, port, settings } = require('./src/config');

const pingRequest = require('./src/requests/ping');
const topRequest = require('./src/requests/top');

const controller = botkit.slackbot(settings);
const slackBot = controller.spawn({ token });

// Bind recieved message handlers
const hear = (request, handler) => {
  const fetch = handler ? () => Promise.resolve(handler) : request.handler;
  controller.hears(request.regexp, request.type, (bot, msg) => {
    fetch(msg).then(reply => bot.reply(msg, reply));
  });
};

// `ping <-> pong` check
hear(pingRequest, 'pong');
// log top contributors of the repo
hear(topRequest);

// Start bot in Real-Time Messaging mode
slackBot.startRTM();

/*
HACK
Heroku needs an active connection on port.
Otherwise, running app wil be shutted down.
*/
controller.setupWebserver(port, () => {});
