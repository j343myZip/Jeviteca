
angular.module("Jeviteca")
    .directive("genreItem", function(){
        return{
            restrict : "AE",
            replace : true,
            templateUrl :"views/Genre/GenreItem.html",
            scope : {
                genre : "="
            },
            link : function(scope){

            }
        };
    });
