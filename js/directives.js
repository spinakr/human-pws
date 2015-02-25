hcp.directive('footer', function(){
    return{
        restrict: 'A',
        replace: true,
        templateUrl: "/partials/footer.html",
        controller: ['$scope', function($scope){
            $scope.clearCache = function () {
            chromeStorage.clearCache();
            }
        }]
    }
});


hcp.directive('header', function(){
    return{
        restrict: 'A',
        replace: true,
        templateUrl: "/partials/header.html",
        controller: "HeaderController"
    };
});
