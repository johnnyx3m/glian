angular.module("gmapApp").factory("SalesmanFactory",["$http",function($http){
    return{
      getSalesmen: function(){
        return $http.get("/getsalesmen");
      },
      addSalesman: function(salesman){
        return $http.post("/addsalesman",salesman);
      },
      deleteSalesman: function(id){
        return $http.delete("/deletesalesman/"+id);
      }
    }
  }]);