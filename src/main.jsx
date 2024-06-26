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
import StatelAcess from './Components/Context/StatelAcess.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <StatelAcess>
      <Provider store={store}>
        <Blog />
        <ToastContainer />
      </Provider>
    </StatelAcess>
  </HashRouter>

)
