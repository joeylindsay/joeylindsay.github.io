import { createRoot } from 'react-dom/client';

import './index.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { JoeyTheme } from './Theming';
import { App } from './App';

// Create a root element for the application
const root = createRoot(document.querySelector('#root')!);

// Render the application
root.render(
  <ThemeProvider theme={JoeyTheme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
