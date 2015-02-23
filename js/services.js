hcp.service('DataService',['$timeout',
    function($timeout){
        var self = this;
        this.pw = 'init';
        this.url = 'startside';
        var tmp;
        function handleMessage(){
            if(tmp.pwValue){
                self.pw = tmp.pwValue;
            }
            if(tmp.newUrl){
                self.url = tmp.newUrl;
            }
        }
        chrome.runtime.onMessage.addListener(function(message,sender){
            tmp = message;
            $timeout(handleMessage);
                                            
        });            

}]);
