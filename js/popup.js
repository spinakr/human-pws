
var ba = chrome.browserAction;

function setAllRead(){
    ba.setBadgeBackgroundColor({color: [0, 255, 0, 128]});
    ba.setBadgeText({text:' '});
}

function setUnread(cnt){
    ba.setBadgeBackgroundColor({color: [255, 0, 0, 128]});
    ba.setBadgeText({text: '' + cnt})
}

function spawnPopup(){

}


document.addEventListener('DOMContentLoaded', function(){
    var spawnPop = document.getElementById('spawnPop');
    spawnPop.addEventListener('click', function(){
        spawnPopup();
    });

});



setUnread(10);


