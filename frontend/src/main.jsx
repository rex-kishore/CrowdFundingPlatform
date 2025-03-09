import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'
import Navbar from './compontents/navbar/Navbar.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <App />
    
  </StrictMode>,
)
