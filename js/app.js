var hcp = angular.module('human-computable-pws', [
        'human-computable-pws.controllers',
        'ngAnimate', 
        'chromeStorage'
        ]);

hcp.config( ['$compileProvider', function( $compileProvider  ) {
        var currentImgSrcSanitizationWhitelist = $compileProvider.imgSrcSanitizationWhitelist();
        var newImgSrcSanitizationWhiteList = currentImgSrcSanitizationWhitelist.toString().slice(0,-1) 
            + '|chrome-extension:' +currentImgSrcSanitizationWhitelist.toString().slice(-1);

        console.log("Changing imgSrcSanitizationWhiteList from "+currentImgSrcSanitizationWhitelist+" to "+newImgSrcSanitizationWhiteList);
        $compileProvider.imgSrcSanitizationWhitelist(newImgSrcSanitizationWhiteList);
    }
]);



function Site(name){
    this.name = name;
    this.challenges = [];

    //add random challenges
    this.challenges.push(fooChallenge()); 
    this.challenges.push(fooChallenge()); 
    this.challenges.push(fooChallenge()); 
    this.challenges.push(fooChallenge()); 
    this.challenges.push(fooChallenge()); 
    this.challenges.push(fooChallenge()); 
    this.challenges.push(fooChallenge()); 
    this.challenges.push(fooChallenge()); 
    this.challenges.push(fooChallenge()); 
    this.challenges.push(fooChallenge()); 
    this.challenges.push(fooChallenge()); 
}





function fooChallenge(){
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var ch = [];

    for(i=0; i<13; i++){
        ch.push(letters.charAt(Math.floor(Math.random()* 26)));
    }
    return ch;
}

