var hcp = angular.module('human-computable-pws', ['ngAnimate', 'chromeStorage'])
.controller("MainController", function($scope, StorageService, chromeStorage){

    $scope.user = {};
    $scope.user.id = '2';
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
            $scope.user.challenges = {};
 //           $scope.user.challenges.push(new Challenge(1, "firstChallenge"))

            chromeStorage.set($scope.user.id, $scope.user);
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


hcp.service('StorageService', function(){
    this.save = function(id, obj){
        chrome.storage.local.set({id: obj},function(){
            console.log("Data stored!")
        })
    };

    this.load = function(id){
        chrome.storage.local.get(id, function(data){
            console.log("Data loaded!") 
            return data
        })
    };

})

var letters = "abcdefghijklmnopqrstuvwxyz";
function Challenge(id, name){
    this.id = id;
    this.name = name;
    this.letters = {};
//    for(i=0; 10; i++){
//        this.letters.push(letters.charAt(Math.floor(Math.random()*28)+1));
//    }
}
