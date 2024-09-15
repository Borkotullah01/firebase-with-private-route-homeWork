import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// import react router
import {RouterProvider} from "react-router-dom";
import Router from './Routes/Router/Router.jsx';
import FirebaseProvider from './Provider/FirebaseProvider.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirebaseProvider>
    <RouterProvider router={Router} />
    </FirebaseProvider>
  </StrictMode>,
)
