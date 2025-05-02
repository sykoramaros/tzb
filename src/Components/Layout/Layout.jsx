import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

const Layout = () => {
  return (
    <>
      <div className="sticky-top">
        <Navbar />
      </div>
      <div style={{ minHeight: "100vh" }}>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
