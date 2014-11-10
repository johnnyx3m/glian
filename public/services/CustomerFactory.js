
angular.module("customerPortalApp").factory("CustomerFactory",["$http",function($http){
	return {
		getCustomers: function(){
			return $http.get("/getcustomers");
		},
		addCustomer: function(newcustomer){
			return $http.post("/addcustomer",newcustomer);
		},
		deleteCustomer: function(id){
			return $http.delete("/deletecustomer/"+id);
		}
	}
}]);