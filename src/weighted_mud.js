/*
Solids control for unweighted mud 
Assumptions:



*/
const { Menu, MenuItem, app } = require("electron");

const template = [
  {
    label: "Edit",
    submenu: [
      {
        label: "Undo",
        accelerator: "CommandOrControl+Z",
        role: "undo",
      },
      {
        label: "Redo",
        accelerator: "Shift+CommandOrControl+Z",
        role: "redo",
      },
      { type: "separator" },
      {
        label: "Cut",
        accelerator: "CommandOrControl+X",
        role: "cut",
      },
      {
        label: "Copy",
        accelerator: "CommandOrControl+C",
        role: "copy",
      },
      {
        label: "Paste",
        accelerator: "CommandOrControl+V",
        role: "paste",
      },
      {
        label: "Select All",
        accelerator: "CommandOrControl+A",
        role: "selectall",
      },
    ],
  },
  {
    label: "Window",
    submenu: [
      {
        label: "Minimize",
        accelerator: "CommandOrControl+M",
        role: "minimize",
      },
      {
        label: "Close",
        accelerator: "CommandOrControl+W",
        role: "close",
      },
    ],
  },
];
const mainMenu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(mainMenu);
// module.exports = Menu.buildFromTemplate(template);
app.on("ready", () => {
  Menu.setApplicationMenu(mainMenu);
});
if (process.platform === "darwin") {
  const name = app.getName();
  template.unshift({ label: name });
}

function flowCentrifuge() {
  //1.Get input Values
  //2.Compute Input Values
  //3. Display Value to UI
}

function clayAndAdditives() {
  //1.Get input Values
  //2.Compute Input Values
  //3. Display Value to UI
}
