import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './styles/App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { AppProvider } from './context/AppContext';

ReactDOM.render(
  <AppProvider>
    <App/>
  </AppProvider>,
  document.getElementById('app')
);