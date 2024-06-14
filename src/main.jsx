import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import Store from "./store/store.js"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements , BrowserRouter } from 'react-router-dom'

import {Today , Hourly} from "./index.js"

const rooter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="" element = {<Today/>}/>
      <Route path="/hourly" element={<Hourly/>}/>
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store= {Store}>
    <RouterProvider router={rooter} />
    </Provider>
  </React.StrictMode>,
)
