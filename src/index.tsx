import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { fairyDustCursor } from './cursor/fairyDustCursor';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
fairyDustCursor();
