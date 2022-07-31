import React from 'react'
import './header.css'
function Header() {
  return (
    <div className='header-bg'>
        <div className='header-name'>
            <h1>Electric Car <br/>Company</h1>
        </div>
        <div className='header-search'>
            <div className = 'search-box'>
                <input type={'text'} ></input>
                <button>SEARCH</button>
            </div>
        </div>
    </div>
  )
}

export default Header