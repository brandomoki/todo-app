import React from 'react';
import ReactDOM from 'react-dom/client';
import SettingsProvider from './Context/Settings/settingsContext';
import { MantineProvider } from '@mantine/core';

import App from './app.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles with withNormalizeCSS>
      <SettingsProvider>
        <App />
      </SettingsProvider>
    </MantineProvider>
  </React.StrictMode>
);
