import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';
import * as url from 'url';
import * as fs from 'fs';

let win: BrowserWindow;


// const fs = (<any>window).require("fs");

app.on('ready', createWindow)

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})


function createWindow() {
  win = new BrowserWindow({ fullscreen: true })

  win.loadURL(
    url.format({
      pathname: path.join(__dirname, `/../../dist/angular-electron/index.html`),
      protocol: 'file:',
      slashes: true,
    })
  )

  win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })
}

ipcMain.on('getFiles', (event, arg) => {
  const files = fs.readdirSync(__dirname)

  win.webContents.send('getFilesResponse', files)
})
