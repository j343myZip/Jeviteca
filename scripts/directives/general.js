angular.module("Jeviteca").directive('sorter', function ($compile) {
    return {
        restrict: 'A',
        scope: {
            label: "=",
            sortable: "=?",
            namesorter:"="
        },
        transclude: true,
        compile: function(element,scope) {
          var html;
          var el;
          if(scope.sortable=='true'){
              html="<span class='sortable'>"+scope.label+"</span><span ng-show='order.by==\""+scope.namesorter+"\"' class='sortable-icon glyphicon' ng-class=\"{ 'glyphicon-chevron-up' : order.sort, 'glyphicon-chevron-down': !order.sort}\"></span>";
              element.append(html);
          }else {
              html="<span class='no-sortable'>"+scope.label+"</span>";
              element.append(html);
          }



        }
    };
}).directive('images',function(){
  return {
    restrict: 'E',
    scope:{
      url: "="
    },
    link:function(scope,element){
        var html='<div class="images-cover" style="background-image:url('+scope.url+')"></div>';
        element.replaceWith(html);
    }
  };

}).directive('wikipedia',function(){
    return {
      restrict :'E',
      scope:{
        name: '='
      },
      link:function(scope,element){
        var html='<a href= "https://es.wikipedia.org/wiki/Special:Search?search='+scope.name+'" target="_blank">'+scope.name+'</a>';
        element.replaceWith(html);
      }
    }
});
