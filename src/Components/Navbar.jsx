import React from 'react'
import logo from '../Assets/logo.png'

function Navbar() {
    return (
        <nav>

            <div className="navbar">
                <div className="nav_logo">
                    <img src={logo} alt="logo" height='100px' width='96px' />


                </div>
                <div className="navbar_links">
                    <ul>
                        <li>Crypto Taxes</li>
                        <li>Free Tools</li>
                        <li>Resource Center</li>
                    </ul>

                    <button className='nav_button'>Get Start</button>


                </div>


            </div>

        </nav>
    )
}

export default Navbar
