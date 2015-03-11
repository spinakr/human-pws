var hcp = angular.module('human-computable-pws', [
        'human-computable-pws.controllers',
        'ngAnimate', 
        'chromeStorage',
        'ngCookies',
        'ngRoute',
        'ngResource'
        ]);

hcp.config( ['$compileProvider', function( $compileProvider  ) {
        var currentImgSrcSanitizationWhitelist = $compileProvider.imgSrcSanitizationWhitelist();
        var newImgSrcSanitizationWhiteList = currentImgSrcSanitizationWhitelist.toString().slice(0,-1) 
            + '|chrome-extension:' +currentImgSrcSanitizationWhitelist.toString().slice(-1);

        console.log("Changing imgSrcSanitizationWhiteList from "+currentImgSrcSanitizationWhitelist+" to "+newImgSrcSanitizationWhiteList);
        $compileProvider.imgSrcSanitizationWhitelist(newImgSrcSanitizationWhiteList);
    }
]);

hcp.config(['$routeProvider', function($routeProvider){
        $routeProvider.
            when('/',{
                templateUrl: 'partials/content.html',
                controller: 'MainController'
            }).
            otherwise({
                redirectTo: '/'
            });
}]);


function Site(id, name){
    this.id = id;
    this.name = name;
    this.challenges = [];

    //add random challenges
    this.challenges.push(randomChallenge()); 
    this.challenges.push(randomChallenge()); 
    this.challenges.push(randomChallenge()); 
    this.challenges.push(randomChallenge()); 
    this.challenges.push(randomChallenge()); 
    this.challenges.push(randomChallenge()); 
    this.challenges.push(randomChallenge()); 
    this.challenges.push(randomChallenge()); 
    this.challenges.push(randomChallenge()); 
    this.challenges.push(randomChallenge()); 
    this.challenges.push(randomChallenge()); 
}





function randomChallenge(){
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var ch = [];

    for(i=0; i<13; i++){
        ch.push(letters.charAt(Math.floor(Math.random()* 26)));
    }
    return ch;
}

