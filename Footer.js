import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="container-fluid bg-white mt-5">
            <div className="row">
                <div className="col-lg-4 p-4">
                    <h3 className="h-font fw-bold fs-3 mb-2">Royal Luxury Resort</h3>
                    <p>
                        Royal Luxury Resort have always achieved excellent international standards of quality products & services.
                        The Group is consistently focused on enhancing its brand & creating memorable experiences for people.
                        The Royal Luxury Resort is located in the heart of the city, opposite Frere Hall and Park.
                        The hotel enjoys excellent accessibility to and from all directions.
                    </p>
                </div>
                <div className="col-lg-4 p-4">
                    <h5 className="mb-3">Quick Links</h5>
                    <Link to="/" className="d-inline-block mb-2 text-decoration-none" >Home</Link><br />
                    <Link to="about" className="d-inline-block mb-2 text-decoration-none" >About Us</Link><br />
                    <Link to="room" className="d-inline-block mb-2 text-decoration-none" >Our Rooms</Link><br />
                    <Link to="contact" className="d-inline-block mb-2 text-decoration-none" >Contact Us</Link><br />

                </div>
                <div className="col-lg-4 p-4">
                    <h5>Follow Us</h5>
                    <Link to="/" className="d-inline-block mb-2"><i className="bi bi-twitter">Twitter</i></Link><br />
                    <Link to="/" className="d-inline-block mb-2"><i className="bi bi-facebook">Facebook</i></Link><br />
                    <Link to="/" className="d-inline-block mb-2"> <i className="bi bi-instagram">Instagram</i></Link><br />
                </div>
            </div>
            <h6 className="text-center bg-dark text-white p-4">Developed by Iqra University</h6>
        </div>
    )
}

export default Footer

