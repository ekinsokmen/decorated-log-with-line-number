'use strict';

describe('DecoratedLogWithLineNumber', function() {
    var $log;

    beforeEach(function () {
        module('DecoratedLogWithLineNumber');
        inject(['$log', function($_log_) { 
            $log=$_log_;
        }]);
    });
   
    it('$log.log decorated', function() {
        $log.log("test log");
        assertLogOutput("test log", $log.$delegate.log);
    });
    
    it('$log.info decorated', function() {
        $log.info("test info");
        assertLogOutput("test info", $log.$delegate.info);
    }); 
    
    it('$log.warn decorated', function() {
        $log.warn("test warn");
        assertLogOutput("test warn", $log.$delegate.warn);
    }); 
    
    it('$log.error decorated', function() {
        $log.error("test error");
        assertLogOutput("test error", $log.$delegate.error);
    }); 

    it('$log.debug decorated', function() {
        $log.debug("test debug");
        assertLogOutput("test debug", $log.$delegate.debug);
    }); 
    
    function assertLogOutput(str, mockLogArray) {
        expect(mockLogArray.logs.length).toBe(1);
        expect(mockLogArray.logs[0][0]).toEqual(str);
        expect(mockLogArray.logs[0][1]).toMatch(/decorated-log-with-line-number_test.js.[0-9]*:[0-9]*/);
    }
});