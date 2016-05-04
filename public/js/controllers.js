'use strict';

var app = angular.module('propertyManagerApp');

app.controller('propertiesCtrl', function($scope, $rootScope, $state, $stateParams, Properties) {
  console.log('propertiesCtrl!');
  $scope.newProperty = {};
  Properties.getAll()
    .then((res) => {
      $scope.properties = res.data;
      console.log($scope.properties);
    })
    .catch(err => {
      console.error(err);
    });

  $scope.openAddProperty = () => {
    console.log('openAddProperty');
    $scope.addingProperty = true;
  }
  $scope.addNewProperty = () => {
    var newProp = $scope.newProperty;
    if(!newProp.address || !newProp.status) return;
    if(!newProp.roomNum || !newProp.rentPrice) return;

    Properties.create(newProp)
      .then((res) => {
        $scope.properties.push(res.data);
      });

    $scope.newProperty = {};
    $scope.addingProperty = false;
  }
})
