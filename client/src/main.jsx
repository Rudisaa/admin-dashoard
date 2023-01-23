import React from 'react';
import App from './App';
import './index.css';
import { configureStore } from '@reduxjs/toolkit';
import ReactDOM from 'react-dom/client';
import globalReducer from './state';
import { Provider } from 'react-redux';
import { setupListeners} from '@reduxjs/toolkit/query';

const store = configureStore({
  reducer: {
    global: globalReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware)
});
setupListeners(store.dispatch);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
