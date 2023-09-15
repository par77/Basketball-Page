import React from 'react';
import '../style.css';
import { useNavigate, NavLink } from 'react-router-dom'

function Nav(){
    const navigate = useNavigate()
    return(
        <nav>
            <div className="navbar">
            <NavLink to='players' className='span'>Players</NavLink>
            <NavLink to='/' className='span'>Home</NavLink>
            <NavLink to='/about' className='span'>About Us</NavLink>
            </div>
        </nav>
    )    
}

export default Nav;