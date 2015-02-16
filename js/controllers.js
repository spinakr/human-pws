angular.module('human-computable-pws.controllers', [])
.controller("MainController", function($scope, chromeStorage){


    $scope.count = 0;
    $scope.respons = '';

    //chromeStorage.clearCache();

    $scope.user = {};

    $scope.range = function(num){
        return new Array(num);
    }
   
    $scope.loadUser = function(){
        chromeStorage.getOrElse($scope.uname, function(){
           
        $scope.user.name = $scope.uname;

        $scope.user.sites= [];
        $scope.user.sites.push(new Site(1, "first site"));

        chromeStorage.set($scope.user.name, $scope.user);
        keyValue = $scope.user; 
            
        return keyValue;
        
        
        }).then(function(keyValue){
            console.log(keyValue);
            $scope.user = keyValue;
        });
        console.log("storage dump:");
        chrome.storage.local.get(null, function(value){
            console.log(value);
        });

    };


    $scope.newUser = function () {
        if ($scope.newUserName) {
            $scope.user.name = this.newUserName ;
            $scope.newUserName = '';
            $scope.user.sites= [];
            $scope.user.sites.push(new Site(1, "first site"))

            chromeStorage.set($scope.user.name, $scope.user);
            chromeStorage.updateDebuggingCache();
            console.log(chromeStorage.getDebuggingCache());
        }
    }

    $scope.newChallenge = function () {
        if ($scope.newChallenge){
            $scope.user.challenges.push($scope.newChallenge);
            chromeStorage.set($scope.user.id, $scope.user);
        }
    }

    console.log($scope);
});
