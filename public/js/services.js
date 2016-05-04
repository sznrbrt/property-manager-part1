'use strict';

var app = angular.module('propertyManagerApp');

app.service('Properties', function($http) {

  this.getAll = () => {
    return $http.get('./api/properties/');
  }
  this.create = (property) => {
    return $http.post('/api/properties/', property);
  }
  this.delete = (id) => {
    return $http.delete(`/api/properties/${id}`);
  }
  this.edit = (id, editedProperty) => {
    return $http.put(`/api/properties/${id}`, editedProperty);
  }
})

app.service('StoreData', function($http) {

  var storeData = {};

  this.get = () => {
    return storeData;
  }

  this.set = (data) => {
    storeData = data;
  }
})
