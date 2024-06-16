import react  from 'react'
import {Header} from "./index" 
import {Footer , Today}  from "./index"
import { Outlet } from 'react-router-dom'
import "./App.css"
import Loading from './components/pages/today/Loading'

function App() {

  return (
  <>
   <Header/>
   {/* <Loading/>  */}
    <Outlet/>
   <Footer/>

  </>
  )}

export default App
