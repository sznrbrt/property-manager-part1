'use strict';

var app = angular.module('propertyManagerApp', ['ui.router', 'ui.bootstrap']);

app.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state('properties', {
      url:'/',
      templateUrl: '/html/properties.html',
      controller: 'propertiesCtrl',
    })
    .state('editproperty', {
      url:'/editcard/:id',
      templateUrl: '/html/editproperty.html',
      controller: 'editPropertyCtrl',
    })

  $urlRouterProvider.otherwise('/');
});
