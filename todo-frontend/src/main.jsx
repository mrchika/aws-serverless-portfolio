import React from 'react'
import ReactDOM from 'react-dom/client' // <- ADD THIS
import App from './App.jsx' // <- ADD THIS
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)