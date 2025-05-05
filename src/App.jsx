import React from "react"
import { HashRouter, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Layout from "./Components/Layout/Layout"
import Home from "./Pages/Home/Home"
import Stationary_Boiler from "./Pages/Stationary_Boiler/Stationary_Boiler"
import Stationary_Heat_Exchanger_Station from "./Pages/Stationary_Heat_Exchanger_Station/Stationary_Heat_Exchanger_Station"
import Air_Handling from "./Pages/Air_Handling/Air_Handling"
import Cogeneration from "./Pages/Cogeneration/Cogeneration"
import Project from "./Pages/Project/Project"
import Mobile_Water from "./Pages/Mobile_Water/Mobile_Water"
import Mobile_Steam from "./Pages/Mobile_Steam/Mobile_Steam"
// import Production from "./Pages/Production/Production"
import Delivery_Conditions from "./Pages/Delivery_Conditions/Delivery_Conditions"
import Rental_Conditions from "./Pages/Rental_Conditions/Rental_Conditions"
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
            <Route path="/stationary-boiler" element={<Stationary_Boiler />} />
            <Route
              path="/stationary-heat-exchanger-station"
              element={<Stationary_Heat_Exchanger_Station />}
            />
            <Route path="/air-handling" element={<Air_Handling />} />
            <Route path="/cogeneration" element={<Cogeneration />} />
            <Route path="/project" element={<Project />} />
            <Route path="/mobile-water" element={<Mobile_Water />} />
            <Route path="/mobile-steam" element={<Mobile_Steam />} />
            {/* <Route path="/production" element={<Production />} /> */}
            <Route
              path="/delivery-conditions"
              element={<Delivery_Conditions />}
            />
            <Route path="/rental-conditions" element={<Rental_Conditions />} />
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
