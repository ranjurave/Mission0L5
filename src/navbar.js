
import React, {useState} from 'react'
import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const [active, setActive] = useState("menu-items")
    const navToggle = () => {
        active === "menu-items" ? setActive("menu-items-active") : setActive("menu-items")
    }
  return (
    <div className='navbar-menu'>
        <div className='name-menu-button'>
            <div className='name-logo'>
                <img src = '/images/electric_car.jpg' alt='logo'/>
                <h1>ECar</h1>
            </div>
            <div className={active ? 'menu-items-active': 'menu-items'  }>
                <button onClick = {navToggle} >
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
        </div>
        <div className={active ? 'menu-items': 'menu-items-active' }>
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