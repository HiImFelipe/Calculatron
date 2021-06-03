const {app, BrowserWindow} = require('electron');
require('@electron/remote/main').initialize();

const createWindow = () => {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      enableRemoteModule: true,
    },
  });

  window.loadURL('http://localhost:3000');
};

app.whenReady().then(() => {
  createWindow();

  app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
  });

  /*
   * This section is custom for MacOS.
   * read https://www.electronjs.org/docs/tutorial/quick-start#open-a-window-if-none-are-open-macos
   */

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
