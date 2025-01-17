import { app, BrowserWindow } from 'electron'

let window

app.on('ready', () => {
  window = new BrowserWindow({
    width: 800,
    height: 640,
    resizable: false,
    titleBarStyle: 'hidden',
    // fullscreen: true,
  })

  window.loadURL('http://localhost:5173')
  window.webContents.openDevTools()
})

app.on('window-all-closed', () => app.quit())
