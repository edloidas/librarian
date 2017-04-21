const GitHubApi = require('github');
const pify = require('pify');
const config = require('./config');

const fetcher = new GitHubApi(config.github);

const getCommits = (owner, repo) => pify(fetcher.repos.getCommits)({ owner, repo });

module.exports = {
  getCommits,
};
