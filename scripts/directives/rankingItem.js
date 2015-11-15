
angular.module("Jeviteca")
    .directive("rankingItem", function(){
        return{
            restrict : "AE",
            replace : false,
            templateUrl :"views/RankingItem.html",
            scope : {
                entity : "@",
                idEntity : "@"
            },
            link : function(scope){

                scope.setRanking = function(value){
                    localStorage.setItem(scope.entity + "_" + scope.idEntity + "_R", value);
                }

                scope.getRanking = function(){
                    return localStorage.getItem(scope.entity + "_" + scope.idEntity + "_R");
                }

            }
        };
    });