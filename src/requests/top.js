const { getCommits } = require('../github');

const regexp = [/^top\s?([\w\d-]+)\/([\w\d-]+)/i];
const type = ['direct_message'];
const handler = (request) => {
  const [, owner, repo] = regexp[0].exec(request.match);
  // return getCommits(owner, repo);
  return Promise.resolve(`Owner: ${owner} / Repo: ${repo}`);
};

module.exports = { regexp, type, handler };
