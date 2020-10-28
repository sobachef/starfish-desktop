const {app, Menu, Tray } = require('electron')
const starfishd = require('starfishd')
const open = require('open')
let tray = null
const init = () => {
  const homedir = require('os').homedir();
  starfishd({ db: homedir + "/.starfish" })
  createTray()
  open("http://localhost:21000")
}
const createTray = () => {
  tray = new Tray(process.resourcesPath + "/extraResources/icon.png")
  const contextMenu = Menu.buildFromTemplate([{
    label: 'Dashboard',
    click: () => {
      open("http://localhost:21000")
    }
  }, {
    label: 'Exit',
    click: () => {
      app.quit()
    }
  }])
  if (process.platform === 'win32') {
    tray.on('click', () => {
      tray.popUpContextMenu(contextMenu)
    })
  }
  tray.setToolTip('Starfish')
  tray.setContextMenu(contextMenu)
}
app.whenReady().then(() => {
  init()
})
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
if (app.dock) app.dock.hide()
