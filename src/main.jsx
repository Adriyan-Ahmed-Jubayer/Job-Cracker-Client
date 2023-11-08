import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Routes/Router'
import { RouterProvider } from "react-router-dom";
import "./Shared/Style.css"
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Authentication from './Providers/Authentication';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Authentication>
        <RouterProvider router={router} />
      </Authentication>
    </HelmetProvider>
  </React.StrictMode>,
)
