angular.module('human-computable-pws.controllers', [])
.controller("MainController", function($scope, chromeStorage){


    chromeStorage.clearCache();
    $scope.count = 0;
    $scope.respons = '';


    $scope.user = {};
    $scope.user.id = '2';

    $scope.range = function(num){
        return new Array(num);
    }
    
    chromeStorage.getOrElse($scope.user.id, function(){
        keyValue = null;
        return keyValue;
    }).then(function(keyValue){
        $scope.user = keyValue;
    });

    $scope.newUser = function () {
        if ($scope.newUserName) {
            $scope.user.name = this.newUserName ;
            $scope.newUserName = '';
            $scope.user.sites= [];
            $scope.user.sites.push(new Site(1, "first site"))

            chromeStorage.set($scope.user.id, $scope.user);
            console.log($scope);
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
