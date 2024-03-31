const { app, BrowserWindow } = require('electron');
const path = require('path');
const { spawn } = require('child_process');
const fs = require('fs');

// Function to create the Electron window
const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 900,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
      nodeIntegration: true,
      contextIsolation: false,
    allowRunningInsecureContent: false,
      sandbox: false,
      webSecurity: true,
      userData: path.join(app.getPath('userData'), 'myapp-cache'),
      contentSecurityPolicy: "script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; connect-src 'self' http://localhost:5000 ws://localhost:3000;",
    },
  });

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // Open the DevTools if needed
  // mainWindow.webContents.openDevTools();
};

// Function to start the backend server
const startBackendServer = () => {
  // Specify the path to your backend server script
  const backendServerPath = path.join(__dirname, '../../backend/server.js');

  // Check if the file exists
  if (!fs.existsSync(backendServerPath)) {
    console.error('Backend server script not found:', backendServerPath);
    return;
  }

  // Spawn a child process to run the backend server
  const backendProcess = spawn('node', [backendServerPath]);

  backendProcess.stdout.on('data', (data) => {
    console.log(`Backend server stdout: ${data}`);
  });

  backendProcess.stderr.on('data', (data) => {
    console.error(`Backend server stderr: ${data}`);
  });

  backendProcess.on('close', (code) => {
    console.log(`Backend server process exited with code ${code}`);
  });

  backendProcess.on('error', (err) => {
    console.error('Failed to start backend server:', err);
  });
};

// Event listener for when Electron is ready
app.whenReady().then(() => {
  // Create the Electron window
  createWindow();

  // Start the backend server
  startBackendServer();

  // On macOS, re-create a window when the dock icon is clicked and no other windows are open
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit the app when all windows are closed, except on macOS
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
