var _extensionPort;
var status = 'aktif';

chrome.runtime.onConnect.addListener(port => {
  _extensionPort = port;
});

chrome.browserAction.onClicked.addListener(tab => {
  _extensionPort.postMessage({
    message: status
  });
  status = status === 'aktif' ? 'pasif' : 'aktif';
});

chrome.runtime.onMessage.addListener((req, sender) => {
  if (req.gridDetected) {
    chrome.browserAction.setIcon({
      tabId: sender.tab.id,
      path: {
        "16": "icons/icon16.png",
        "19": "icons/icon19.png",
        "48": "icons/icon48.png",
        "128": "icons/icon128.png"
      }
    })
  }
});
