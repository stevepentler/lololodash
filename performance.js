var _ = require("lodash");

var rank = function(employees) {
  var total = _.reduce(employees, function (sum, employee) {
    return sum + employee.income;
  }, 0);

  var average = total / employees.length;

  var underperform = _.chain(employees)
                      .filter(function (employee) {
                        return employee.income <= average;})
                      .sortBy('income');

  var overperform = _.chain(employees)
                     .filter(function (employee) {
                      return employee.income > average;})
                     .sortBy('income');

  return {
    average: average,
    underperform: underperform,
    overperform: overperform
  };
};

module.exports = rank;