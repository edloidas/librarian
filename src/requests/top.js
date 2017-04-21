const { getCommits } = require('../github');
const moment = require('moment');

const regexp = [/^top\s?([\w\d-]+)\/([\w\d-]+)/i];
const type = ['direct_message'];
const handler = (request) => {
  const [, owner, repo] = regexp[0].exec(request.match);
  const date = moment();
  const until = date.toISOString();
  const since = date.subtract(1, 'days').toISOString();

  return getCommits(owner, repo, since, until).then((commits) => {
    if (commits.data.length === 0) {
      return 'No commits in 24 hours.';
    }
    const inc = obj => prop => (obj[prop] || 0) + 1;
    const contributors = commits.data.reduce((prev, curr) => {
      const login = curr.author.login;
      prev[login] = inc(prev)(login); // eslint-disable-line no-param-reassign
      return prev;
    }, {});

    const top = Object.keys(contributors)
      .map(user => ({ login: user, commits: contributors[user] }))
      .sort((a, b) => b.commits - a.commits)
      .slice(0, 3)
      .map((user, index) => `#${index + 1} @${user.login} : ${user.commits} commits.`)
      .join('\n');
    return `Top contributors to *${owner}/${repo}*:\n${top}`;
  }).catch(() => "Sorry, can't find repo.");
};

module.exports = { regexp, type, handler };
