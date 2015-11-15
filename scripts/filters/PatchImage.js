angular.module("Jeviteca").filter("PatchImage", function(){

    return function(image){
        return "resources/img/" + image.replace(/ /g,"").split(".")[0] + ".jpg";
    }

});
