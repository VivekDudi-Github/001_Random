import react  from 'react'
import {Header} from "./index" 
import {Footer , Today}  from "./index"
import { Outlet } from 'react-router-dom'
import "./App.css"

function App() {

  return (
  <>
   <Header/>
    <Outlet/>
   <Footer/>

  </>
  )}

export default App
