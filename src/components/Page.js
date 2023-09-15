import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Nav from "./Nav"
import Home from "./Home"
import '../style.css';
import AboutUS from './AboutUS';
import NoMatch from './NoMatch';
import Kobe from './Kobe';
import Lebron from './Lebron';
import Jordan from './Jordan';
import Russell from './Russell';
import Players from './Players';


function Page() {
    return (
        <div>
            <Nav/>
            <Routes>
                <Route path='/' element = {<Home />} /> 
                <Route path='players' element={<Players />}>
                    <Route path='kobe' element={<Kobe />} />
                    <Route path='lebron' element={<Lebron />} />
                    <Route path='jordan' element={<Jordan />} />
                    <Route path='russell' element={<Russell />} />
                </Route>
                <Route path='about' element = {<AboutUS />} />
                <Route path='*' element= {<NoMatch />} />
            </Routes>
        </div>
    )
}

export default Page;