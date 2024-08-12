import React from 'react'
import './App.css'

function Nav() {
  return (
    <div>
      <nav>
      <ul className='nav__links'>
        <li><a href="#">Services</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">About</a></li>
      </ul>
      </nav>
      <a href="#" className='cta'><button>Contact</button></a>
    </div>
  )
}

export default Nav