chrome.runtime.sendMessage({gridDetected: detector()});

function detector() {
  var gridDetected = false;

  $.each($('body, body *'), (index, el) => {
    var elStyles = window.getComputedStyle(el)
    var elPropDisplay = elStyles.getPropertyValue('display')

    if (elPropDisplay === 'grid') {
      gridDetected = true
    }
  })

  return gridDetected
}
