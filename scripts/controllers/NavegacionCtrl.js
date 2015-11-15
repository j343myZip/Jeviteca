angular.module("Jeviteca").controller("NavegacionCtrl",
    ["$scope", "$routeSegment", function($scope, $routeSegment){

    $scope.routeIsAlbum = function(){
        return $routeSegment.startsWith("album");
    }

    $scope.routeIsBands = function(){
        return $routeSegment.startsWith("bands");
    }

    $scope.routeIsGenre = function(){
        return $routeSegment.startsWith("genre")
    }

}]);
