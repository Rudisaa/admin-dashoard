import React from 'react';
import App from './App';
import './index.css';
import ReactDOM from 'react-dom/client';
import globalReducer from './state'
import { Provider } from 'react-redux';
import { setupListeners} from '@reduxjs/toolkit/query';
import { api } from './state/api'
import { configureStore } from '@reduxjs/toolkit';

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
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>,
)
