chrome.browserAction.onClicked.addListener(function() {
        chrome.windows.create({
            url: chrome.extension.getURL('main.html'),
            type: 'panel',
            focused: true,
            height: 700,
            width: 400,
        });
});

