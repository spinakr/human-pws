angular.module('human-computable-pws.controllers', [])
.controller("MainController", function($rootScope, $scope,$cookies, chromeStorage, DataService){

    //chromeStorage.clearCache();

    $scope.dataService = DataService;

    $scope.newSiteButton = true;
    $scope.newSite = function(){
        $scope.newSiteButton = false;
    }

//    $scope.newUser = function () {
//        if ($scope.newUserName) {
//            $rootScope.user.name = this.newUserName ;
//            $rootScope.newUserName = '';
//            $rootScope.user.sites= [];
//            $rootScope.user.sites.push(new Site(1, "first site"))
//
//            chromeStorage.set($rootScope.user.name, $rootScope.user);
//            chromeStorage.updateDebuggingCache();
//            console.log("storage dump after insertion:");
//            console.log(chromeStorage.getDebuggingCache());
//        }
//    }
//
//    $scope.newChallenge = function () {
//        if ($scope.newChallenge){
//            $rootScope.user.challenges.push($scope.newChallenge);
//            chromeStorage.set($rootScope.user.id, $rootScope.user);
//        }
//    }

})
.controller("HeaderController", function($rootScope, chromeStorage, DataService){

    try{
        chromeStorage.getOrElse("users", function(){

            $rootScope.users = [];
            return [];
        }).then(function(keyValue){
            $rootScope.users = keyValue;
            $rootScope.user = $rootScope.users[0];
            console.log("users: %o",$rootScope.users);
            
           // for(user in keyValue){
           //     $rootScope.users[user] = keyValue[user];
           // }
        });
    }
    catch(err){
        console.log("Not run as extension")
    }


    $rootScope.loadUser = function(){
        console.log("users: %o", $rootScope.users);
        var user = searchUser($rootScope.uname, $rootScope.users)
        if(user){
            $rootScope.user = user;
        }else{
            var newUser = {
                name: $rootScope.uname,
                sites: [
                    new Site(0, "studweb.ntnu.no"),
                    new Site(1, "facebook.com"),
                    new Site(2, "accounts.google.com"),
                    new Site(3, "github.com")


                    ]
            };
            $rootScope.users.push(newUser) ;
            chromeStorage.set("users", $rootScope.users);
            $rootScope.user = newUser;
        }
    };


    function searchUser(uname, users){
        if(users == undefined) return false;
        for(var i = 0; i<users.length; i++){

            if(users[i].name == uname){
                return users[i];
            }
        }
            return false;
    }


});


