import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './main.css'
import './index.scss'


import App from './App.jsx'
import Navigation from './Navigation.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navigation />
  </StrictMode>,
)
