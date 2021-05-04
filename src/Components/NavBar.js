import React from 'react'
import LandscapeIcon from '@material-ui/icons/Landscape';
import { Link } from 'react-router-dom';
import './NavBar.css'


function NavBar() {
    
    return (
        <nav className='navBar'>
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo'>
                    JG <LandscapeIcon style={{ height: '50', width: '50' }}/>
                </Link>
                <ul className='nav-menu'>
                    <li className='nav-item'>
                        <Link to= "/about" className='styled-link'>About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to ="/projects" className='styled-link'>Projects</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to = "skills" className='styled-link'>Skills</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to= "/contact" className='styled-link'>Contact Me</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar