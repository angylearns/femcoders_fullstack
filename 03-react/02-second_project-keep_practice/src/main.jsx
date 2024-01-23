import React from 'react'
import ReactDOM from 'react-dom/client'

import Header from './components/Header'
import SectionIndex from './components/SectionIndex'
import './index.css'
import Button from './components/Button'

ReactDOM.createRoot(document.getElementById('header')).render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('sectionIndex')).render(
  <React.StrictMode>
    <SectionIndex />
  </React.StrictMode>
)