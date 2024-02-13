import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import Blog from './Blog.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Blog />
  </HashRouter>
)
