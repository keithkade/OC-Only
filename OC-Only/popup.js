/* global chrome, window, document, console */

function saveOptions() {
    var filterShares = document.getElementById('filter_shares').checked;
    var filterRetweets = document.getElementById('filter_retweets').checked;

    chrome.storage.local.set({
      filterShares: filterShares,
      filterRetweets: filterRetweets
    });
}

function restoreOptions() {
  document.getElementById('save').addEventListener('click', saveOptions);
  chrome.storage.local.get({
    filterShares: false,
    filterRetweets: false
  }, function(opts) {
    document.getElementById('filter_shares').checked = opts.filterShares;
    document.getElementById('filter_retweets').checked = opts.filterRetweets;
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);

