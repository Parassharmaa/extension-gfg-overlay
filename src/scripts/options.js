import storage from "./utils/storage";

var displaySelector = document.querySelectorAll(".js-radio");

storage.get("display", function(resp) {
  var color = resp.display;
  var option;
  if (color) {
    option = document.querySelector(`.js-radio.${color}`);
  } else {
    option = displaySelector[0];
  }

  option.setAttribute("checked", "checked");
});

displaySelector.forEach(function(el) {

  el.addEventListener("click", function(e) {
    var value = this.value;
    storage.set({ display: value });
  });
});
