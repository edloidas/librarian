const GitHubApi = require('github');
const pify = require('pify');
const config = require('./config');

const fetcher = new GitHubApi(config.github);

const getCommits = (owner, repo, since, until) => pify(fetcher.repos.getCommits)({ owner, repo, since, until, page: 1, sha: 'master' });

module.exports = {
  getCommits,
};
