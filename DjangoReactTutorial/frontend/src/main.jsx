import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// Original imports unsure if needed
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)