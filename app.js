angular.module('App', [])
  .controller('CustomerListController', function() {
    var customerList = this;
    customerList.customers = [
      {text:'learn angular', done:true},
      {text:'build an angular app', done:false}];

    customerList.addCustomer = function() {
      customerList.customer.push({text:customerList.todoText, done:false});
      customerList.todoText = '';
    };

    customerList.remaining = function() {
      var count = 0;
      angular.forEach(customerList.customer, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    customerList.archive = function() {
      var oldcustomer = customerList.customer;
      customerList.customer = [];
      angular.forEach(oldcustomer, function(todo) {
        if (!todo.done) customerList.customer.push(todo);
      });
    };
  });
