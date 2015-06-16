/*global chrome, console, document, XPathResult, setInterval*/

//returns the nth parent of an element
function nthParent(elem, n){
    for (var i=0; i<n; i++){
        elem = elem.parentElement;
    } 
    return elem;
}

//check every two seconds for new shared posts and retweets
chrome.storage.local.get('filterShares', function (result) {
    if (result.filterShares){
        removeShares();
        setInterval(removeShares, 2000);
    }
});

chrome.storage.local.get('filterRetweets', function (result) {
    if (result.filterRetweets){
        removeRetweets();
        setInterval(removeRetweets, 2000);
    }
});

//actually remove the shared post html nodes
function removeShares(){
    var path = "//span[@class='fcg' and contains(text(),'shared')]";
    var shares = document.evaluate(path, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    if (shares.snapshotLength > 0) {
        for (var i=0; i<shares.snapshotLength; i++){
            var post = nthParent(shares.snapshotItem(i), 12);
            post.parentNode.removeChild(post);
        }
    }
}

//actually remove the retweets html nodes
function removeRetweets(){
    var path = "//span[@class='js-retweet-text']";
    var shares = document.evaluate(path, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    if (shares.snapshotLength > 0) {
        for (var i=0; i<shares.snapshotLength; i++){
            var post = nthParent(shares.snapshotItem(i), 4);
            post.parentNode.removeChild(post);
        }
    }
}