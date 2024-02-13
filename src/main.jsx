import React from 'react'
import ReactDOM from 'react-dom/client'
import Blog from './Blog.jsx'
import './index.css'
import store from './store';
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(

  <HashRouter>
    <Provider store={store}>
      <Blog />
    </Provider>
  </HashRouter>

)
