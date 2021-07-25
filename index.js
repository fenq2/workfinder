import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import { AuthProvider } from './context/auth.context';

import App from './components/App/App';


ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
