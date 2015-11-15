angular.module("Jeviteca").controller("BandsCtrl", ["$scope", "Bands", "$filter", function($scope, Bands, $filter){
    $scope.order={
        by:'name',
        sort:false
    };
    $scope.query = {};
    $scope.queryBy = '$';
    $scope.bands = $filter("orderBy")(Bands.data, $scope.order.by);



}]);
