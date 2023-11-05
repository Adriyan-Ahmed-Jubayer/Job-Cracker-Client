import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Routes/Router'
import { RouterProvider } from "react-router-dom";
import "./Shared/Style.css"
import Authentication from './Providers/Authentication';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authentication>
      <RouterProvider router={router} />
    </Authentication>
  </React.StrictMode>,
)
