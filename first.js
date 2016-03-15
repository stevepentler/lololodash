var _ = require("lodash");

var filter = function(people) {
  return _.filter(people, {active: true});
};

module.exports = filter;