var _ = require('lodash');

var sorted = function(items){
  return _.sortBy(items, function(item){
    return -item.quantity
  });
};

module.exports = sorted;