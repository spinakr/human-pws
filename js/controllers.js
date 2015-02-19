angular.module('human-computable-pws.controllers', [])
.controller("MainController", function($rootScope, $scope, chromeStorage){


    $scope.count = 0;
    $scope.respons = '';


    $rootScope.user = {};


    chrome.storage.local.get(null, function(value){
        $scope.users = value;
    });


    $scope.range = function(num){
        return new Array(num);
    }
   


    $scope.newUser = function () {
        if ($scope.newUserName) {
            $rootScope.user.name = this.newUserName ;
            $rootScope.newUserName = '';
            $rootScope.user.sites= [];
            $rootScope.user.sites.push(new Site(1, "first site"))

            chromeStorage.set($rootScope.user.name, $rootScope.user);
            chromeStorage.updateDebuggingCache();
            console.log(chromeStorage.getDebuggingCache());
        }
    }

    $scope.newChallenge = function () {
        if ($scope.newChallenge){
            $rootScope.user.challenges.push($scope.newChallenge);
            chromeStorage.set($rootScope.user.id, $rootScope.user);
        }
    }

});
