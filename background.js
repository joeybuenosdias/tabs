console.log('Hello background.js');

chrome.browserAction.onClicked.addListener(() => {
    var iconUrl = chrome.runtime.getURL('roxy-favicon-32.png')

    chrome.tabs.create({
        index: 0
    }, tab => {
        tab.favIconUrl = iconUrl
    })
})