import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';

import './index.css';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import { store } from './redux/store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </StrictMode>
);
