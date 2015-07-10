var bacon = angular.module('bacon', ['ngRoute', 'appControllers']);

var appControllers = angular.module('appControllers', []);

bacon.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'views/main.html'
    }).
    when('/login', {
      templateUrl: 'views/login.html'
    }).
    when('/signup', {
      templateUrl: 'views/signup.html'
    }).
    when('/member', {
      templateUrl: 'views/signup.html'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);