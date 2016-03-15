var _ = require("lodash");

var words = function(list) {
  return _.chain(list)
          .sortBy()
          .map(function(word) {
            return word.toUpperCase() + "CHAINED";
          })
        };

module.exports = words;