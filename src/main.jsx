import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

// import { HooksApp } from './HooksApp'
import './index.css'

import './components/08-useReducer/intro-reducer';
import { MainApp } from './components/09-useContext/MainApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
    {/* <HooksApp /> */}
    <MainApp />
    {/* </React.StrictMode> */}
  </BrowserRouter>
)
