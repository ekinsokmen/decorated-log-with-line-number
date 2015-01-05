/*
    Adding line number information to angular.js logger using decorator pattern.
*/
angular.module('DecoratedLogWithLineNumber', []).config(function ($provide) {
    $provide.decorator('$log', function ($delegate) {
        var logLineProvider = function () {
            try {
                return new Error().stack.split("\n")[4].trim();
            } catch(err) {
                // Some browsers do not provide a stack
                return '';
            }
        }
        
        var appendLineToArgs=function(args) {
            var newArgs = [];
            for (var i = 0; i < args.length; i++) {
              newArgs.push(args[i]);
            }
            newArgs.push(logLineProvider());
            return newArgs;
        }
        
        var decoratedLog = function decoratedLog() {
            return $delegate.apply(this, arguments);  
        };
        
        decoratedLog.log = function dLog() {
            $delegate.log.apply($delegate,appendLineToArgs(arguments));
        };
        
        decoratedLog.info = function dInfo() {
            $delegate.info.apply($delegate,appendLineToArgs(arguments));
        };

        decoratedLog.warn = function dWarn() {
            $delegate.warn.apply($delegate,appendLineToArgs(arguments));
        };
        
        decoratedLog.error = function dError() {
            $delegate.error.apply($delegate,appendLineToArgs(arguments));
        };

        decoratedLog.debug = function dDebug() {
            $delegate.debug.apply($delegate,appendLineToArgs(arguments));
        };
        
        decoratedLog.$delegate = $delegate;
        
        return decoratedLog;
    });
});
