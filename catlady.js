var _ = require("lodash")

var comments = function(list) {
  var commentCount = [];

  var grouped = _.groupBy(list, 'username');
  
  _.forEach(grouped, function(list, username){
    commentCount.push({username: username, 
                       comment_count: _.size(list)});
  });

  var ordered = _.sortBy(commentCount, function(catlady){
    return -catlady.comment_count
  });

  return ordered;
};

module.exports = comments; 
