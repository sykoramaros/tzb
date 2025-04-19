import React from "react";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-gray fib-h-5">
                <div className="container-fluid position-relative">
                    <a className="navbar-brand position-absolute" href="#">
                        <img src={`${process.env.PUBLIC_URL}/img/logo.png`}
                             alt="TZB Orlová" className="fib-h-8 fib-mt-5"
                        />
                    </a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="ms-auto navbar-nav fib-font-2 fib-gap-1">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <span className="navbar-text">|</span>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Statické</a>
                            </li>
                            <span className="navbar-text">|</span>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Mobilní</a>
                            </li>
                            <span className="navbar-text">|</span>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Monitoring</a>
                            </li>
                            <span className="navbar-text">|</span>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Kontakty</a>
                            </li>
                        </ul>
                        {/*<button className="navbar-toggler" type="button" data-bs-toggle="collapse"*/}
                        {/*        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"*/}
                        {/*        aria-label="Toggle navigation">*/}
                        {/*    <span className="navbar-toggler-icon"></span>*/}
                        {/*</button>*/}
                    </div>
                    <div className="btn-group fib-ms-5">
                        <button className="btn bg-light-gray dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                            LANG
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">ENG</a></li>
                            <li><a className="dropdown-item" href="#">CZE</a></li>
                            <li><a className="dropdown-item" href="#">RUS</a></li>
                        </ul>
                    </div>
                    <button type="button"
                            className="d-block d-lg-none btn btn-outline-light fib-w-3 fib-h-3">+
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar