angular.module("Jeviteca")
    .directive("albumItem", function(){
    return{
        restrict : "AE",
        replace : true,
        templateUrl :"views/Album/AlbumItem.html",
        scope : {
            album : "="
        },
        link : function(scope){

        }
    };
});
