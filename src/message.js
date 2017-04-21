module.exports = {
  ping: {
    regexp: [/^ping$/i],
    type: ['direct_message'],
    reply: 'pong',
  },
  ghUsers: {
    regexp: [/^ghUsers/i],
    type: ['direct_message'],
  },
  top: {
    regexp: [/^top/i],
    type: ['direct_message'],
  },
};
