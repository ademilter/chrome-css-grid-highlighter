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