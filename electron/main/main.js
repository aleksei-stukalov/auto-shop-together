import { app, BrowserWindow } from 'electron'

let window

app.on('ready', () => {
  window = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: false,
    // fullscreen: true,
  })

  window.loadURL('http://localhost:5173')
  window.webContents.openDevTools()
})

app.on('window-all-closed', () => app.quit())
