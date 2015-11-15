angular.module("Jeviteca").controller("GenresCtrl", ["$scope", "Genres", "$filter", function($scope, Genres, $filter){
  $scope.order={
      by:'name',
      sort:false
  };
    $scope.genres = $filter("orderBy")(Genres.data, $scope.order.by);

}]);
