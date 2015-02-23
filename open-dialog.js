if(document.URL == "https://www.facebook.com/" && confirm('Open dialog for testing?')){



    //var inj = angular.module('injected', ['human-computable-pws']);
  


//    var html = document.querySelector('html');
 //   html.setAttribute('ng-app', 'injected');
   // html.setAttribute('ng-csp', '');

 //   var passwords = getPwdInputs(); 
  //  var pwField = passwords[0];
   // var pwParent = pwField.parentNode;

   // pwField.setAttribute('ng-model', 'pw');
    //pwField.setAttribute('ng-change', 'changed(shared.pw)');

    //pwParent.setAttribute('ng-controller', 'InjectedController');

    //inj.controller('InjectedController', function ($scope,$cookies, sharingService) {
    //    $scope.pw = $cookies.pw;
     //   $scope.shared = sharingService;
    //});


    chrome.runtime.sendMessage({type:'request_password'});

}


