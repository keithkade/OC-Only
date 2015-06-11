/* global chrome, window, document, console */

//storage example
chrome.storage.sync.set({'value': "test"}, function() {
    // Notify that we saved.
    console.log('Settings saved');
});

function filterRetweets(){
    chrome.tabs.executeScript({
        code:'console.log("Filter Retweets Clicked");'
    });
}

function filterShares(){
    chrome.tabs.executeScript({
        code:'console.log("Filter Shares Clicked");'
    });
}  

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('retweets').addEventListener('click', filterRetweets);
    document.getElementById('shares').addEventListener('click', filterShares);
});