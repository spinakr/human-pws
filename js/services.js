hcp.service('DataService',['$timeout', 'chromeStorage', '$resource',
    function($timeout, chromeStorage, $resource){
        var self = this;
        this.pw = '';
        this.url = '';
        var tmp;
        this.start = +new Date();
        this.calcTime = 1;


        //rest server receiving data
        this.res = $resource('http://localhost:8080/data', {}, {'put': {method: 'PUT', params: {}, isArray: false}});

        function handleMessage(){
            if(tmp.pwValue){
                self.pw = tmp.pwValue;
                
                var current = +new Date();
                self.calcTime = ( current - self.start )/1000;
                self.start = current;
               
                //send timing data to rest api
                self.res.put({"Time": self.calcTime}, function success() {}, function error(){});
                

            }
            if(tmp.newUrl){
                self.url = tmp.newUrl;
                //set selectedSite to the new url.
            }
        }
        chrome.runtime.onMessage.addListener(function(message,sender){
            tmp = message;
            $timeout(handleMessage);
                                            
        });            

}]);

