import ext from "./utils/ext";

let display = "yes";

function checkDisplay(request, _sender, sendResponse) {
  if (request.action === "display-status") {
    sendResponse({ action: display });
  }
}

ext.runtime.onMessage.addListener(checkDisplay);

ext.storage.onChanged.addListener(changes => {
  console.log(changes);
  Object.keys(changes).forEach(key => {
    var storageChange = changes[key];
    if (key === "display") {
      display = storageChange.newValue;
    }
  });
});
