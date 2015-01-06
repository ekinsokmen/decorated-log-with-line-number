'use strict';

angular.module('DecoratedLogDemoApp', [
  'DecoratedLogWithLineNumber'
]).controller('DecoratedLogDemoCtrl', ['$log','$scope', function DecoratedLogDemoCtrl($log,$scope) {
    $log.log("Test log");
    
    $log.debug("Test debug");
    
    $scope.generateLog=function generateLog() {
        $log.log("Log in action!");
    }
}]);
