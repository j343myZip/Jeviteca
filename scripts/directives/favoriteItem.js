angular.module("Jeviteca")
    .directive("favoriteItem", function(){
        return{
            restrict : "AE",
            replace : false,
            templateUrl :"views/FavoriteItem.html",
            scope : {
                entity : "@",
                idEntity : "@"
            },
            link : function(scope){
                scope.isFavorite = function(){
                    var favorite = localStorage.getItem(scope.entity + "_" + scope.idEntity);
                    return favorite == "true";
                };

                scope.setFavorite = function(){
                    localStorage.setItem(scope.entity + "_" + scope.idEntity, "true");
                }

                scope.removeFavorite = function(){
                    localStorage.removeItem(scope.entity + "_" + scope.idEntity);
                }

            }
        };
    });

