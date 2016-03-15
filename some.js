var _ = require("lodash");

function rateTemp(temp) {
  return temp > 19;
}

var sortTowns = function(towns) {
  var type = {
    hot: [],
    warm: []
  };

  _.forEach(towns, function(town, townName) {
    if (_.every(town, rateTemp)) {
      type.hot.push(townName);
    } else if (_.some(town, rateTemp)) {
      type.warm.push(townName);
    }
  });

  return type;
};

module.exports = sortTowns;