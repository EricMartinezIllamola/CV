import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import Main from './Main';
import Project_1 from '../pages/Project_1';
import Project_2 from '../pages/Project_2';
import Project_3 from '../pages/Project_3';
import Footer from './Footer';

function App() {

    return (
        <React.StrictMode>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/personal-portfolio/" element={<Main />}></Route>
                    <Route path="/personal-portfolio/Project_1" element={<Project_1 />}></Route>
                    <Route path="/personal-portfolio/Project_2" element={<Project_2 />}></Route>
                    <Route path="/personal-portfolio/Project_3" element={<Project_3 />}></Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </React.StrictMode >
    );
}



export default App;

