function save_options() {
  var borderColor = document.getElementById('borderColor').value;
  chrome.storage.sync.set({
    borderColor: borderColor
  }, () => {
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(() => {
      status.textContent = '';
    }, 750);
  });
}
function restore_options() {
  chrome.storage.sync.get({
    borderColor: '#00FFFF'
  }, items => {
    document.getElementById('borderColor').value = items.borderColor;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
