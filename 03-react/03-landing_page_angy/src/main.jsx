import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './components/app/App.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import Footer from './components/footer/Footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('body')).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Footer />
  </React.StrictMode>,
)
