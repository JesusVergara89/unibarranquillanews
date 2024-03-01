import React from 'react'
import ReactDOM from 'react-dom/client'
import Blog from './Blog.jsx'
import './index.css'
import store from './store';
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';
import 'font-awesome/css/font-awesome.css'
import StatAlacces from './Components/Context/Statelacces.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <StatAlacces>
      <Provider store={store}>
        <Blog />
        <ToastContainer />
      </Provider>
    </StatAlacces>
  </HashRouter>

)
