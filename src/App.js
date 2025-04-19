import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Layout from "./Components/Layout/Layout";
import Try from "./Pages/Try/Try";
import Home from "./Pages/Home/Home";
import './App.css';

const App = () => {
    return (
        <>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/try" element={<Try />} />
                    </Route>
                </Routes>
            </HashRouter>
        </>
    )
}

export default App