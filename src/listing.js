import React from 'react'
import './listing.css'
function Listing() {
  return (
    <div className='listing'>
      <div className='listing-image'>
        <img src = '/images/car1.jpg' alt='car'></img>
      </div>
      <div className='listing-details'>
        <h2>Kona EV</h2>
        <h5>2021 - Range 300km</h5>
      </div>
    </div>
  )
}

export default Listing
