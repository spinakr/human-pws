// Handle requests for passwords
chrome.runtime.onMessage.addListener(function(request) {
    if (request.type === 'request_password') {
            chrome.windows.create({
                url: chrome.extension.getURL('main.html'),
                type: 'panel',
                focused: true,
                height: 500,
                width: 400
                // incognito, top, left, ...
        });
    }
});

var passwords = getPwdInputs(); 
var pwField = passwords[0];
pwField.addEventListener('input', function (){
    chrome.windows.get(null, function(views){
        views.document.getElementsById('changing').innerHTML = "KOFOED";
    });
    console.log('input length changed to :' + pwField.value.length);
});

function setPassword(password) {
    // Do something, eg..:
    console.log(password);
};


function getPwdInputs() {
      var ary = [];
        var inputs = document.getElementsByTagName("input");
        for (var i=0; i<inputs.length; i++) {
            if (inputs[i].type.toLowerCase() === "password") {
                      ary.push(inputs[i]);
                          
            }
              
        }
          return ary;

}
