

angular.module('bomGraph', []).directive('customDir', function() {
  return {
    scope: {
      data: '=data',
      options: '=options'
    },
    
    link: function (scope, element, attrs) {
      var graph = null;
      var graphContainer = element[0]
      var buildGraph = function (scope) {
        
          graph = new vis.Network(graphContainer, scope.data, scope.options);
         
      };      
      scope.$watch('data', function(newval, oldval) {
        buildGraph(scope);
      },
      true);
    }
  };
});


