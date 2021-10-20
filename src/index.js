import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import DrinksProvider from './context/DrinksProvider';

const basename = document.querySelector('base')?.getAttribute('href') ?? '/'    

ReactDOM.render(
  <BrowserRouter basename={ basename }>
    <DrinksProvider>
      <App />
    </DrinksProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
