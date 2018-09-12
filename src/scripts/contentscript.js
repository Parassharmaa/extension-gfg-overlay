import ext from "./utils/ext";
import axios from "axios";

console.log("Hello from the outside");

const url = "https://gate-gfg.herokuapp.com/";

const divCSS = `position: fixed;
                z-index: 9999;
                top: 9%;
                box-shadow: 1px 1px 10px #333;
                bottom: 1%;
                right: 0;
                height: 90%;
                background: #fff;
                font-size: 13px;
                width: 200px;
                overflow-y: auto;
                padding: 4px;
                overflow-x: hidden`;

ext.runtime.sendMessage({ action: "display-status" }, response => {
  if (response.action === "yes") {
    axios.get(url).then(data => {
      data = data.data.data;
      const body = document.querySelector("body");
      const newDiv = document.createElement("div");
      newDiv.setAttribute("id", "sidebar");
      newDiv.innerHTML = data;
      newDiv.setAttribute("style", divCSS);
      body.appendChild(newDiv);
    });
  }
});
