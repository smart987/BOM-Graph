var app = angular.module('bomApp', ['bomGraph']);

app.controller('bomController', ['$scope', 'appService', '$rootScope', function ($scope, appService, $rootScope) {
   
    var get = function () {
        appService.get().then(function (promise) {  

            $scope.graph = {
                
                options:  {
                    "hierarchicalLayout": {
                        "direction": "UD"
                        
                    },
                    "edges": {
                        "style":"arrow-center",
                        "color":"#c1c1c1"
                    },
                    "nodes": {
                        "shape":"oval",
                        "color":"#ccc"

                    }
                },
                
                data: {
                    nodes: promise.nodes,
                    edges: promise.edges
                }
            };
             
            
        });
        
    };
    
    $scope.newNode = {
        id: undefined,
        label: undefined,
        level: undefined,
        parent: undefined,
       
    };

    $scope.arrNode = {};
    $scope.update = function (nodes) {
        $scope.arrNode = angular.copy(nodes);
        $rootScope.x = angular.copy(nodes);
        
       
    };

   
    
    $scope.newEdge = {
        id: undefined,
        from: undefined, 
        to: undefined
       
    };
   
    $scope.arrEdge = {};
    $scope.updateE = function (edges) {
        $scope.arrEdge = angular.copy(edges);
        
    };
    
   
    get();
    

}]);



app.factory('appService', ['$q', '$http', '$rootScope', function ($q, $http, $rootScope) {
    
    return {
        get: function (method, url) {
            var deferred = $q.defer();
            $http.get('data.json')
              .success(function (response) {
                  deferred.resolve(response);
                  
              })
            return deferred.promise;
           
        }, 
     
        
    };
    
}]);