import ext from "./utils/ext";
import storage from "./utils/storage";

const optionsLink = document.querySelector(".js-options");
optionsLink.addEventListener("click", function(e) {
  e.preventDefault();
  ext.tabs.create({ url: ext.extension.getURL("options.html") });
});

