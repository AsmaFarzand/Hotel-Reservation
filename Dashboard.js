import React from 'react'

const Dashboard = () => {
    return (
        <div>
            <div className="contaner-fluid bg-dark text-light p-3 d-flex align-items-center justify-content-between sticky-top">
                <h3 className="mb-0 h-font">ROYAL LUXURY RESORT</h3>
                <a href="Logout.php" className="btn btn-light btn-sm">LogOut</a>
            </div>
            <div className="col-lg-2 bg-dark border-top border-3 border-secondary" id="dashboardmenu">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container-fluid flex-lg-column align-items-stretch">
                        <h4 className="mt-2 text-light">ADMIN PANNEL</h4>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#admin"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse flex-column align-items-stretch mt-2" id="admin">
                            <ul className="nav nav-pills flex-column ">
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="userquery.php">User Queries</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="contact">Room Booking</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Dashboard
