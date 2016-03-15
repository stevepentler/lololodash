var _ = require("lodash");

var summary = function(articles) {
  var result = [];

  var grouped = _.groupBy(articles, 'article');

  _.forEach(grouped, function (orders, name) {
    var total = _.reduce(orders, function (sum, order) {
      return sum + order.quantity;
    }, 0);

    result.push({ article: parseInt(name), total_orders: total });
  });

  return _.sortBy(result, 'total_orders').reverse();
};

module.exports = summary;

