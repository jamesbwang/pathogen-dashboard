'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('MainCtrl', function ($scope) {
    $scope.jsonOutputs = [
      "json_output/centrifuge_2018.09.21.json"
    ];
  });
