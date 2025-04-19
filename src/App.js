import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from "./Components/Layout/Layout";
import './App.css';

const App = () => {
    return (
        <>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        
                    </Route>
                </Routes>
            </HashRouter>
        </>
    )
}

export default App