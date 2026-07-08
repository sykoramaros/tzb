import React, { useState } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <>
      <nav className="navbar-container d-flex justify-content-evenly align-items-center w-100 py-2">
        <div>
          <Link to="/" className="logo-img">
            <img
              className=""
              src={`${process.env.PUBLIC_URL}/img/logo.png`}
              alt="TZB Orlová"
              width="135"
              height="auto"
            />
          </Link>
        </div>
        <ul
          className={`navbar-menu ${
            isOpen ? "open" : ""
          } gap-3 gap-lg-4 my-auto d-md-flex fs-3`}
        >
          <li className="navbar-item  fw-medium my-auto">
            <Link to="/" className="text-white" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <span className="d-none d-lg-block  my-auto text-white">|</span>
          <li className="nav-item  fw-medium my-auto dropdown">
            <Link
              className="nav-link dropdown-toggle text-white"
              to="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Statické
            </Link>
            <ul className="dropdown-menu fs-4">
              <li>
                <Link
                  className="dropdown-item fw-medium  gray"
                  to="/stationary-boiler"
                  onClick={closeMenu}
                >
                  Kotelny
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item fw-medium  gray"
                  to="/stationary-heat-exchanger-station"
                  onClick={closeMenu}
                >
                  Výměníkové stanice
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item fw-medium  gray"
                  to="/air-handling"
                  onClick={closeMenu}
                >
                  Vzduchotechnika
                </Link>
              </li>
              <li></li>
              <li>
                <Link
                  className="dropdown-item fw-medium  gray"
                  to="/cogeneration"
                  onClick={closeMenu}
                >
                  Kogenerace
                </Link>
              </li>
              <hr className="dropdown-divider" />
              <li>
                <Link className="dropdown-item fw-medium  green" to="/project" onClick={closeMenu}>
                  Projekce
                </Link>
              </li>
            </ul>
          </li>
          <span className=" d-none d-lg-block  my-auto text-white">|</span>
          <li className="nav-item  fw-medium my-auto dropdown">
            <Link
              className="nav-link dropdown-toggle text-white"
              to="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Mobilní
            </Link>
            <ul className="dropdown-menu fs-4">
              <li>
                <Link
                  className="dropdown-item fw-medium  gray"
                  to="/mobile-water"
                  onClick={closeMenu}
                >
                  Teplovodní
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item fw-medium  gray"
                  to="/mobile-steam"
                  onClick={closeMenu}
                >
                  Parní
                </Link>
              </li>
              <hr className="dropdown-divider" />
              {/* <li>
                <Link
                  className="dropdown-item fw-medium green"
                  to="/production"
                >
                  Výroba
                </Link>
              </li> */}
              <li>
                <Link
                  className="dropdown-item fw-medium green"
                  to="/delivery-conditions"
                  onClick={closeMenu}
                >
                  Dodání
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item fw-medium green"
                  to="/rental-conditions"
                  onClick={closeMenu}
                >
                  Pronájem
                </Link>
              </li>
            </ul>
          </li>
          <span className=" d-none d-lg-block  my-auto text-white">|</span>
          <li className="navbar-item  fw-medium my-auto">
            <Link to="/monitoring" className="text-white" onClick={closeMenu}>
              Monitoring
            </Link>
          </li>
          <span className="d-none d-lg-block  my-auto text-white">|</span>
          <li className="navbar-item  fw-medium my-auto">
            <Link to="/contacts" className="text-white" onClick={closeMenu}>
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
          className="navbar-toggle bg-transparent d-md-none font-13 fw-bolder ms-auto"
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
