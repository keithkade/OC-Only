/* global chrome, window, document, console */

function saveOptions() {
    var filterShares = document.getElementById('filter-shares').checked;
    var filterRetweets = document.getElementById('filter-retweets').checked;
    var fbList = document.getElementById('fb-list').value;
    var twitterList = document.getElementById('twitter-list').value;

    chrome.storage.local.set({
      filterShares: filterShares,
      filterRetweets: filterRetweets,
      fbList: fbList,
      twitterList: twitterList
    });
}

function restoreOptions() {
  document.getElementById('save').addEventListener('click', saveOptions);
  chrome.storage.local.get({
    filterShares: false,
    filterRetweets: false,
    fbList: "",
    twitterList: ""      
  }, function(opts) {
    document.getElementById('filter_shares').checked = opts.filterShares;
    document.getElementById('filter_retweets').checked = opts.filterRetweets;
    document.getElementById('fb-list').value = opts.fbList;
    document.getElementById('twitter-list').value = opts.twitterList;
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);

