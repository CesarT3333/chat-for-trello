/**
 * Created by robert.chapman on 11/17/15.
 */
var script = document.createElement('script');
script.src = chrome.extension.getURL('libs/webrequest-wrapper/content.js');
script.onload = function () {
    this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(script);