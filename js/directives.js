hcp.directive('footer', function(){
    return{
        restrict: 'A',
        replace: true,
        templateUrl: "/partials/footer.html",
        controller: ['$scope', 'chromeStorage', function($scope, chromeStorage){
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
