import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import DrinksProvider from './context/DrinksProvider';

ReactDOM.render(
  <BrowserRouter>
    <DrinksProvider>
      <App />
    </DrinksProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
