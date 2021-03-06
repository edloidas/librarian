librarian-bot
==

[![Travis Build Status][travis-image]][travis-url]
[![Dependency Status][dep-image]][dep-url]
[![devDependency Status][devdep-image]][devdep-url]
<!-- [![AppVeyor Build Status][appveyor-image]][appveyor-url] -->
<!-- [![Coverage Status][coveralls-image]][coveralls-url] -->

> Slack bot.

## About

Librarian allows you to see your or any other GitHub user work in repository within 24-hour interval.

## Usage

* `ping` -- the bot will respond with `pong` message

* `top <owner>/<repo>` -- the bot will show top 3 contributors within 24 hours

#### Examples:

* `top enonic/xp`

* `top facebook/react`

## Configuration

Deployed on [Heroku](https://heroku.com).

* Set the `Config Variables` from the app settings in the dashboard to access them from `process.env.*`.

| KEY   | VALUE     | DESCRIPTION |
| ----- | --------- | ----------- |
| TOKEN | `$TOKEN`  | Token, generated by the Slack. |


## License

[MIT](LICENSE) © [Taukachou Mikita](https://edloidas.com)

<!-- Links -->
[travis-url]: https://travis-ci.org/edloidas/librarian-bot
[travis-image]: https://img.shields.io/travis/edloidas/librarian-bot.svg?label=linux%20build

[appveyor-url]: https://ci.appveyor.com/project/edloidas/librarian-bot
[appveyor-image]: https://img.shields.io/appveyor/ci/edloidas/librarian-bot.svg?label=windows%20build

[coveralls-url]: https://coveralls.io/github/edloidas/librarian-bot?branch=master
[coveralls-image]: https://coveralls.io/repos/github/edloidas/librarian-bot/badge.svg?branch=master

[dep-url]: https://david-dm.org/edloidas/librarian-bot
[dep-image]: https://david-dm.org/edloidas/librarian-bot.svg

[devdep-url]: https://david-dm.org/edloidas/librarian-bot#info=devDependencies
[devdep-image]: https://david-dm.org/edloidas/librarian-bot/dev-status.svg
