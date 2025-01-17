import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import router from './routes/main.jsx';
import axios from 'axios';

// redux
import { Provider } from 'react-redux';
import { store } from './store/store.jsx'

const {VITE_ACCESS_TOKEN}=import.meta.env
/* setup axios */
axios.defaults.baseURL = "https://api.themoviedb.org/3"
axios.defaults.headers.common['Authorization'] = `Bearer ${VITE_ACCESS_TOKEN}`


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // </React.StrictMode>,
)
