angular.module("Jeviteca").service("AlbumsProvider", ["$http", "$q", "$filter",
    function ($http, $q, $filter) {

   this.getAlbums = function(){

       return $http.get("resources/data/albums.json");
   };

    this.getAlbumById = function(idAlbum){

        var deferred = $q.defer();

        $http.get("resources/data/albums.json").then(function(data){

            var element = $filter("filter")(data.data, {"id" : idAlbum })[0];

            deferred.resolve(element);

        });

        return deferred.promise;

    };
}]);
