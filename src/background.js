var _extensionPort;
var status = "aktif";

chrome.runtime.onConnect.addListener(function (port) {
  _extensionPort = port;
});

chrome.browserAction.onClicked.addListener(function (tab) {
  _extensionPort.postMessage({
    message: status
  });
  status = status === "aktif" ? "pasif" : "aktif";
});