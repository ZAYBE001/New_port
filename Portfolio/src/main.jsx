import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './style.css';
import './script.js';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
