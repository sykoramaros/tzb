import React from "react"
import { HashRouter, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Layout from "./Components/Layout/Layout"
import Home from "./Pages/Home/Home"
import StationaryBoiler from "./Pages/StationaryBoiler/StationaryBoiler"
import StationaryHeatExchangerStation from "./Pages/StationaryHeatExchangerStation/StationaryHeatExchangerStation"
import AirHandling from "./Pages/AirHandling/AirHandling"
import Cogeneration from "./Pages/Cogeneration/Cogeneration"
import Project from "./Pages/Project/Project"
import MobileWater from "./Pages/MobileWater/MobileWater"
import MobileSteam from "./Pages/MobileSteam/MobileSteam"
// import Production from "./Pages/Production/Production"
import DeliveryConditions from "./Pages/DeliveryConditions/DeliveryConditions"
import RentalConditions from "./Pages/RentalConditions/RentalConditions"
import Monitoring from "./Pages/Monitoring/Monitoring"
import Contacts from "./Pages/Contacts/Contacts"
import DataProtections from "./Pages/DataProtections/DataProtections"
import Try from "./Pages/Try/Try"
import "./App.css"

const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/stationary-boiler" element={<StationaryBoiler />} />
            <Route
              path="/stationary-heat-exchanger-station"
              element={<StationaryHeatExchangerStation />}
            />
            <Route path="/air-handling" element={<AirHandling />} />
            <Route path="/cogeneration" element={<Cogeneration />} />
            <Route path="/project" element={<Project />} />
            <Route path="/mobile-water" element={<MobileWater />} />
            <Route path="/mobile-steam" element={<MobileSteam />} />
            {/* <Route path="/production" element={<Production />} /> */}
            <Route
              path="/delivery-conditions"
              element={<DeliveryConditions />}
            />
            <Route path="/rental-conditions" element={<RentalConditions />} />
            <Route path="/monitoring" element={<Monitoring />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/data-protections" element={<DataProtections />} />
            <Route path="/try" element={<Try />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
