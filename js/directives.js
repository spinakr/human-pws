hcp.directive('footer', function(){
    return{
        restrict: 'A',
        replace: true,
        templateUrl: "/js/directives/footer.html",
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
        templateUrl: "/js/directives/header.html",
        controller: ['$rootScope', 'chromeStorage', function($rootScope, chromeStorage){
        
            $rootScope.loadUser = function(){
                chromeStorage.getOrElse($rootScope.uname, function(){
                   
                $rootScope.user.name = $rootScope.uname;

                $rootScope.user.sites= [];
                $rootScope.user.sites.push(new Site($rootScope.user.sites.length, "first site"));
                $rootScope.user.sites.push(new Site($rootScope.user.sites.length, "second site"));

                chromeStorage.set($rootScope.user.name, $rootScope.user);
                keyValue = $srootScope.user; 
                    
                return keyValue;
                
                
                }).then(function(keyValue){
                    $rootScope.user = keyValue;
                });
                console.log("storage dump:");

            };
        
        }]
    }
});
