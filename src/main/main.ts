/* eslint global-require: off, no-console: off, promise/always-return: off */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `npm run build` or `npm run build:main`, this file is compiled to
 * `./src/main.js` using webpack. This gives us some performance wins.
 */
import path from 'path';
import { app, BrowserWindow, ipcMain, Tray } from 'electron';
// import { autoUpdater } from 'electron-updater';
// import log from 'electron-log';
import { resolveHtmlPath } from './util';

const trayWindow = require('electron-tray-window');

ipcMain.on('ipc-example', async (event, arg) => {
  const msgTemplate = (pingPong: string) => `IPC test: ${pingPong}`;
  console.log(msgTemplate(arg));
  event.reply('ipc-example', msgTemplate('pong'));
});

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

// const isDebug =
//   process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';

// if (isDebug) {
//   require('electron-debug')();
// }

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

let appIcon = null;

const setupTray = () => {
  const RESOURCES_PATH = app.isPackaged
    ? path.join(process.resourcesPath, 'assets')
    : path.join(__dirname, '../../assets');

  const getAssetPath = (...paths: string[]): string => {
    return path.join(RESOURCES_PATH, ...paths);
  };

  const win = new BrowserWindow({
    show: false,
    width: 300,
    height: 450,
    maximizable: false,
    titleBarStyle: 'hidden',
    resizable: false,
    webPreferences: {
      preload: app.isPackaged
        ? path.join(__dirname, 'preload.js')
        : path.join(__dirname, '../../.erb/dll/preload.js'),
    },
  });

  appIcon = new Tray(getAssetPath('icon.png'));
  trayWindow.setOptions({
    tray: appIcon,
    window: win,
  });
  win.loadURL(resolveHtmlPath('index.html'));
};

app
  .whenReady()
  .then(() => {
    setupTray();
  })
  .catch(console.log);
