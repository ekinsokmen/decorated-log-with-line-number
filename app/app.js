'use strict';

angular.module('DecoratedLogDemoApp', [
  'DecoratedLogWithLineNumber'
]).controller('DecoratedLogDemoCtrl', ['$log', function DecoratedLogDemoCtrl($log) {
    $log.log("Test log");
    $log.debug("Test debug");
}]);
