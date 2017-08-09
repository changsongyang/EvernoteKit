'use strict';

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function (tab) {
    if (tab.url.indexOf('app.yinxiang.com') > -1) {
        chrome.tabs.executeScript({ code: 'preview()' });
    } else {
        alert(chrome.i18n.getMessage("errMsg1"));
    }
});
