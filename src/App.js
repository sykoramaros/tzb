import React from "react"
import { HashRouter, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Layout from "./Components/Layout/Layout"
import Home from "./Pages/Home/Home"
import Static from "./Pages/Static/Static"
import Mobile from "./Pages/Mobile/Mobile"
import Monitoring from "./Pages/Monitoring/Monitoring"
import Contacts from "./Pages/Contacts/Contacts"
import Try from "./Pages/Try/Try"
import "./App.css"

const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/static" element={<Static />} />
            <Route path="/mobile" element={<Mobile />} />
            <Route path="/monitoring" element={<Monitoring />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/try" element={<Try />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
