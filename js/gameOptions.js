const play = document.getElementById("playGame");
const settings = document.getElementById("btnSettings");
const profile = document.getElementById("btnProfile");

play?.addEventListener("click", () => {
  const { ipcRenderer } = require("electron");
  ipcRenderer.send("play");
});

settings?.addEventListener("click", () => {
  const { ipcRenderer } = require("electron");
  ipcRenderer.send("settings");
});

profile?.addEventListener("click", () => {
  const { ipcRenderer } = require("electron");
  ipcRenderer.send("profile");
});
