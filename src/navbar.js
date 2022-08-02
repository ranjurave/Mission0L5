
import React, {useState} from 'react'
import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const [menuType, setMenu] = useState("menu-collapsed")
    const menuToggle = () => {
        console.log(menuType);
        menuType === "menu-collapsed" ? setMenu("menu-expand") : setMenu("menu-collapsed")
    }
  return (
    <div className='navbar-menu'>
        <div className='name-menu-button'>
            <div className='name-logo'>
                <img src = '/images/electric_car.jpg' alt='logo'/>
                <h1>ECar</h1>
            </div>
                <div onClick={menuToggle} className='menu-mobile-button' >
                        <FontAwesomeIcon icon={faBars} />
                <div className={menuType}>
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