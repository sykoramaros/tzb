import React, { useState } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <nav className="navbar bg-gray d-flex justify-content-evenly align-items-center w-100 py-1">
        <div>
          <Link to="/" className="logo-img">
            <img
              className="w-8"
              src={`${process.env.PUBLIC_URL}/img/logo.png`}
              alt="TZB Orlová"
            />
          </Link>
        </div>

        <ul
          className={`navbar-menu ${
            isOpen ? "open" : ""
          } gap-3 gap-lg-4 my-auto d-md-flex`}
        >
          <li className="navbar-item font-5 fw-medium my-auto">
            <Link to="/" className="text-white">
              Home
            </Link>
          </li>
          <span className=" d-none d-lg-block font-5 my-auto text-white">
            |
          </span>
          <li className="navbar-item font-5 fw-medium my-auto">
            <Link to="/static" className="text-white">
              Statické
            </Link>
          </li>
          <span className=" d-none d-lg-block font-5 my-auto text-white">
            |
          </span>
          <li className="navbar-item font-5 fw-medium my-auto">
            <Link to="/mobile" className="text-white">
              Mobilní
            </Link>
          </li>
          <span className=" d-none d-lg-block font-5 my-auto text-white">
            |
          </span>
          <li className="navbar-item font-5 fw-medium my-auto">
            <Link to="/monitoring" className="text-white">
              Monitoring
            </Link>
          </li>
          <span className="d-none d-lg-block font-5 my-auto text-white">|</span>
          <li className="navbar-item font-5 fw-medium my-auto">
            <Link to="/contacts" className="text-white">
              Kontakty
            </Link>
          </li>
        </ul>

        {/* <div className="lang-container btn-group bg-light-gray rounded-4 my-auto">
          <button
            className="btn dropdown-toggle gray font-2 my-auto"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            LANG
          </button>
          <ul className="dropdown-menu">
            <li>
              <Link to="/" className="dropdown-item gray">
                ENG
              </Link>
            </li>
            <li>
              <Link to="/cz" className="dropdown-item gray">
                CZE
              </Link>
            </li>
            <li>
              <Link to="/ru" className="dropdown-item gray">
                RUS
              </Link>
            </li>
          </ul>
        </div> */}

        <button
          className="navbar-toggle bg-transparent d-md-none font-8 fw-bolder ms-auto me-1"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          ☰
        </button>
      </nav>
    </>
  )
}

export default Navbar
