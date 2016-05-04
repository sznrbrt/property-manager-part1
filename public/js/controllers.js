'use strict';

var app = angular.module('propertyManagerApp');

app.controller('propertiesCtrl', function($scope, $rootScope, $state, $stateParams, Properties, StoreData) {
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
        $scope.clear();
      });
  }

  $scope.removeProp = function (property) {
    var index = $scope.properties.indexOf(property);
    var id = property._id;
    Properties.delete(id)
    .then(() => {
      $scope.properties.splice(index, 1);
    })
    .catch(err => {
      console.error(err);
    });
  }

  $scope.editProp = function (property) {
    StoreData.set(property);
    $state.go('editproperty', {'id': property._id});
  }

  $scope.clear = () => {
    $scope.newProperty = {};
    $scope.addingProperty = false;
  }
})

app.controller('editPropertyCtrl', function($scope, $rootScope, Properties, $state, $stateParams, StoreData) {
  var data = StoreData.get();
  $scope.editedProperty = angular.copy(data);

  $scope.cancel = function() {
    $state.go('properties');
  }

  $scope.reset = function() {
    $scope.editedProperty = angular.copy(data);
  }

  $scope.editProperty = function() {
    var input = $scope.editedProperty;
    Properties.edit(input._id, input)
    .then(() => {
      $state.go('properties');
    })
  }

})
