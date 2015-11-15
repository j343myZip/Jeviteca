angular.module("Jeviteca").service("GenresProvider", function ($http) {

    this.getGenres = function(){
        return $http.get("resources/data/genres.json");
    };
});
