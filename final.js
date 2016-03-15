var _ = require("lodash");

var greeting = function(user) {
  var statement = _.template('Hello <%= user.name %> (logins: <%= user.login.length %>)');
  return statement({user: user});
};

module.exports = greeting;