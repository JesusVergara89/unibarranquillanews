import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import Blog from './Blog.jsx'
import './index.css'
import store from './store';
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(

  <HashRouter>
    <Provider store={store}>
      <Blog />
    </Provider>
  </HashRouter>

)
