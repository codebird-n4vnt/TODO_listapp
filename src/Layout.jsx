import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
//outlet help create layouts
// by using outlet we create a location for mounting our pages
// in this case it will create all pages with Navbar above them and the main content in the position of outlet
// outlet will be equal to about, contactUs or App when they are routed
function Layout() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
