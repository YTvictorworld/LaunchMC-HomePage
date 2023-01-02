const exit = document.getElementById("exit");
const minimize = document.getElementById("minimize");
const maximize = document.getElementById("maximize");
exit?.addEventListener("click", () => {
  const { ipcRenderer } = require("electron");
  ipcRenderer.send("exit");
});

minimize?.addEventListener("click", () => {
  const { ipcRenderer } = require("electron");
  ipcRenderer.send("minimize");
});

maximize?.addEventListener("click", () => {
  const { ipcRenderer } = require("electron");
  ipcRenderer.send("maximize");
});
