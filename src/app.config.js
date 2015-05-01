(function (app) {
  "use strict";

  app.config(config);

  function config($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
      url: '/',
      templateUrl: '../src/app.template.html',
      controller: 'App as vm'
    });

    $urlRouterProvider.otherwise('/');
  }


}(angular.module('app')));
