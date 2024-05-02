import 'reflect-metadata'
import './config/mobxinit'
import 'bulma/css/bulma.min.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './screens/App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)