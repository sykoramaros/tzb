import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <div className="footer-container row bg-light-gray p-2">
        <div className="d-block d-sm-none col-sm-12 d-flex justify-content-center align-items-center mb-1">
          <Link
            to="/try"
            className="text-white text-center d-block text-decoration-none font-8 bg-green p-2"
          >
            Contact Us
          </Link>
        </div>
        <div className="col-6 col-sm-4 d-flex justify-content-center align-items-center">
          <div className="bg-gray d-flex flex-column justify-content-center px-2 py-1 text-white roounded-1">
            <address className="text-end mb-0 font-3">
              TZB Orlová s.r.o.
            </address>
            <address className="text-end mb-0 font-3">Slezská 1288</address>
            <address className="text-end mb-0 font-3">
              735 14 Orlová-Poruba
            </address>
          </div>
        </div>

        <div className="d-none d-sm-block col-sm-4 d-flex justify-content-center align-items-center">
          <Link
            to="/try"
            className="text-white text-center d-block text-decoration-none font-8 bg-green p-2 rounded-1"
          >
            Contact Us
          </Link>
        </div>
        <div className="col-6 col-sm-4 d-flex justify-content-center align-items-center">
          <div className="bg-gray d-flex flex-column justify-content-center px-2 py-1 text-white rounded-1">
            <Link
              to="/try"
              className="text-start light-gray mb-0 font-3 text-decoration-none"
            >
              Data Protections
            </Link>
            <p className="text-start mb-0 font-3">Copyright © 2025</p>
            <p className="text-start mb-0 font-3">All rights reserved</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
