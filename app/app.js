'use strict';

angular.module('DecoratedLogDemoApp', [
  'DecoratedLogWithLineNumber'
]).controller('DecoratedLogDemoCtrl', ['$log', function($log) {
    $log.log("Test log");
    $log.debug("Test debug");
}]);
