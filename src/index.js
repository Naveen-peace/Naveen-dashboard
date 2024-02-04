import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import '../src/dash-component/asset/css/style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));


function renderApp() {
  root.render(
    <BrowserRouter future={{ v7_startTransition: true }}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  );
}

renderApp();


export { renderApp };
