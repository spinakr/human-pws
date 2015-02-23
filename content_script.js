
var passwords = getPwdInputs(); 
var pwField = passwords[0];

if(pwField){
    pwField.addEventListener('input', function (callback){

        console.log("input content: " + pwField.value.length);
        chrome.runtime.sendMessage({pwValue: pwField.value}, function(respons){
            console.log("Respons pw changed: " + respons);
        });
        
    });
}

document.addEventListener("hashchange", function(){
    console.log("send new urlhA");
    chrome.runtime.sendMessage({newUrl: window.location.hostname},function(respons){
        console.log("Respons new url: " + respons);
    });
});

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
