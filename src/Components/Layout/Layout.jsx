import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import "./Layout.css"

const Layout = () => {
  return (
    <>
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="layout-container">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Layout
