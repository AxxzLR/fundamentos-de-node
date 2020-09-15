const { BrowserWindow } = require("electron")

const { app, BrowserWindow } = require('electron')

let mainWindow;

app.on('ready', createWindow)

const createWindow = () => {
    mainWindow = new.BrowserWindow({
        width: 800,
        height: 600
    })

    mainWindow.loadFile('index.html')
}