import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Kobe from './Kobe'
import Lebron from './Lebron'
import Jordan from './Jordan'
import Russell from './Russell'

const Players = () => {
  return (
    <>
    <div className='players-list'>
        <li>
            <ul><Link to='kobe' element = {<Kobe />}>Kobe</Link></ul>
            <ul><Link to='lebron' element={<Lebron />}>Lebron</Link></ul>
            <ul><Link to='jordan' element={<Jordan />}>Jordan</Link></ul>
            <ul><Link to='russell' element={<Russell />}>Russell</Link></ul>
        </li>
    </div>
    <div className="outlet"><Outlet /></div>
    </>
  )
}

export default Players