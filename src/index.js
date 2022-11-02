import React from 'react';
import ReactDOM from 'react-dom/client';
import SettingsProvider from './Context/Settings/settingsContext';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from "react-router-dom";

import App from './app.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles with withNormalizeCSS>
      <SettingsProvider>
        <BrowserRouter>
        <App />
        </BrowserRouter>
      </SettingsProvider>
    </MantineProvider>
  </React.StrictMode>
);
