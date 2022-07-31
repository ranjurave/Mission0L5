
import React from 'react'
import "./navbar.css";
function Navbar() {
  return (
    <div className='navbar-menu'>
        <div className='name-logo'>
            <img src = '/images/electric_car.png' alt='logo'/>
            <h1>ECar</h1>
        </div>
        <div className='menu-items'>
            <div className='menu-buttons'>
                <p>About</p>
            </div>
            <div className='menu-buttons'>
                <p>Inventory</p>
            </div>
            <div className='menu-buttons'>
                <p>Finance</p>
            </div>
            <button>
                Login
            </button>
        </div>
    </div>
  )
}

export default Navbar