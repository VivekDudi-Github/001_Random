import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import Store from "./store/store.js"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements  } from 'react-router-dom'

import {Today , Hourly, RadarPage , Ten_Days_Forecast} from "./index.js"

const rooter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="" element = {<Today/>}/>
      <Route path="/hourly" element={<Hourly/>}/>
      <Route path='/10_day' element={<Ten_Days_Forecast/>} />
      <Route path='/radar'  element={<RadarPage/>} />
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
