const GitHubApi = require('github');
const pify = require('pify');
const config = require('./config');

const fetcher = new GitHubApi(config.github);

const getFollowingForUser = username => pify(fetcher.users.getFollowingForUser)({ username })
  .then(data => JSON.stringify(data));

module.exports = {
  getFollowingForUser,
};
