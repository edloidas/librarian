const { getCommits } = require('../github');
const moment = require('moment');

const regexp = [/^top\s?([\w\d-]+)\/([\w\d-]+)/i];
const type = ['direct_message'];
const handler = (request) => {
  const [, owner, repo] = regexp[0].exec(request.match);
  const date = moment();
  const until = date.toISOString();
  const since = date.subtract(1, 'days').toISOString();
  return Promise.resolve(`Owner: ${owner} / Repo: ${repo}`);
  // return getCommits(owner, repo, since, until).then(resp => resp ? 'Some commits :)' : 'No commits :(');
};

module.exports = { regexp, type, handler };
