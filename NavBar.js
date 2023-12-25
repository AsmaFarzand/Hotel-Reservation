import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white px-lg-3 py-lg-2 shadow-sm sticky-top">
            <div className="container-fluid">
                <Link to="/" className='navbar-brand me-5 fw-bold fs-3 h-font'>ROYAL LUXURY RESORT</Link>
                <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item"><Link to="/" class="nav-link active me-2">Home</Link></li>
                        <li className="nav-item"><Link to="/about" className="nav-link me-2">AboutUs</Link></li>
                        <li className="nav-item"><Link to="/room" className="nav-link me-2">Our Rooms</Link></li>
                        <li className="nav-item"><Link to="/contact" className="nav-link me-2">Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default NavBar
