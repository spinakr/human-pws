chrome.app.runtime.onLaunched.addListener(function(){
    chrome.app.window.create('main.html', {
        'bounds': {
            'width': 400,
            'height': 500
        }
    });
});

chrome.runtime.onInstalled.addListener(function(){
    console.log('installed');
});
