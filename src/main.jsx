import React from 'react'
import ReactDOM from 'react-dom/client'
import Blog from './Blog.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
  <React.StrictMode>
    <Blog />
  </React.StrictMode>,
  </HashRouter>
)
