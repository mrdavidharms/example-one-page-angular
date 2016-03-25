var app = angular.module('app', [ ]);

app.controller('CustomerListController', function($http){
  var self = this;
  $http.get('customers.json').then(function(res){
     self.customers = res.data;
  });
});

app.controller('CustomerAddController', function($http){
     var self = this;
     self.addCustomer = function() {
     //below serverUrl would be server where you configured post request
     //pass self.customer in that, will pass whole customer filled form
     $http.post(serverUrl, self.customer).then(function(res){
         self.customers = res.data;
     })
     .success(function(data){
          console.log(data);
          if (!data.success) {
            self.errorName = data.errors.name;
          } else {
            self.message = data.message;
          }
      });
    };
});
