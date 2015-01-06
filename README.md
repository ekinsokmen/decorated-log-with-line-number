# decorated-log-with-line-number
One of the important information a log line may give is the line number where the log was generated. While playing around with angular.js the injected log service $log seem to be lacking proper line number support. This is a simple spare time project adding proper line numbers to log output by decorating angular $log.

This project may be used to get some basic knowledge about:
- Angular.js
- [angular-seed](https://github.com/angular/angular-seed)
- Some node.js tools like `npm install` `npm test`
- Dependency Injection
- Decorator Pattern
- Jasmin JS test framework and mocking

## Sample console output using the decorator module:
`Test log at new DecoratedLogDemoCtrl (.../decorated-log-with-line-number/app/app.js:6:10)   angular.js:10126`

`Test debug at new DecoratedLogDemoCtrl (.../decorated-log-with-line-number/app/app.js:7:10) angular.js:10126`
