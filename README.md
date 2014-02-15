28.io AngularJS Binding [![Build Status](https://travis-ci.org/28msec/28.io-angularjs.png?branch=master)](https://travis-ci.org/28msec/28.io-angularjs)
============

## Installation
Via [Bower](http://bower.io/)
```
$ bower install 28.io-angularjs --save
```
## API Documentation
http://28msec.github.io/28.io-angularjs/3.1.0/

## Example

```javascript
angular.module('myApp', ['auth.api.28.io', 'queries.api.28.io'])
.controller('AppCtrl', function($scope, $cacheFactory, Auth, Queries){
    var projectName = 'myproject';
    var auth = new Auth('http://portal.28.io', $cacheFactory('Auth'));
    var queries = new Queries('http://' + projectName + '.28.io', $cacheFactory('Queries'));

    $scope.login = function(){
        auth.authenticate('client_credentials', 'w+testing@28.io', 'hello')
        .then(function(tokens){
            var projectToken = tokens.project_tokens['project_' + projectName];
            queries.listQueries('public', projectToken)
            .then(function(publicQueries){
                $scope.publicQueries = publicQueries;
            })
            .catch(function(error){
                alert('Server replied: ' + error.description);
            });
        })
        .catch(function(error) {
            alert('Server replied: ' + error.description);
        });
    };
}); 
```

## Support
https://28msec.zendesk.com