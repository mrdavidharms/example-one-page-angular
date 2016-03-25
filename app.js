


  var app = angular.module('app', [ ]);
  app.controller('CustomerListController',['$http', function($http){
    var list = this;
    list.customers = [ ];
    $http.get('/customers.json').success(function(data){
      list.customers = data;
    });
  }]);
