var hcp = angular.module('human-computable-pws', ['ngAnimate'])
.controller("MainController", function($scope){
  

    $scope.user = {};
    //chrome.storage.local.get('user', function (result){
     //   $scope = result;  
    //});


    console.log($scope);

    $scope.updateUser = function () {
        if ($scope.newUser) {
            $scope.showForm = false;
            $scope.user.name = this.newUser ;
            $scope.newUser = '';
            saveScope($scope)
        }
    }
});

function saveScope(scope) {
    chrome.storage.local.set({'user': $scope}, function(){
        console.log("scope saved");
    });

}
