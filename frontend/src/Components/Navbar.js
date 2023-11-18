import React from 'react'
import './Navbar.css';
import{Link} from "react-router-dom"
function Navbar() {
  return (
    <div>
        <div className="navbar">
        <div className='navbar__title navbar__item'>AR</div>
        <div  className='navbar__item'>
            <Link to="/"><li>Home</li></Link>
            <Link to="/login"><li>Login</li></Link>
            <Link to="/register"><li>Register</li></Link>
        </div>
        </div>
    </div>
  )
}

export default Navbar