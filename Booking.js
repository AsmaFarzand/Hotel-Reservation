


import { useState, useEffect } from 'react'

const Booking = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getApiData()
    }, [])

    const getApiData = async () => {
        const response = await fetch('http://localhost:5000/api/roomBook/')
            .then((response) => response.json())

        setUsers(response.message)
        // console.log(users)
    }
    return (
        <div className='bg-light'>
            <dIV class="my-5 px-4">
                <h2 class="fw-bold h-font text-center">OUR ROOMS</h2>
                <div class="h-line bg-dark"></div>
            </dIV>
            <div className='row'>

                <div class="card border-0 shadow-sm mb-4">
                    <div class="card-body">
                        <div className='table-responsive-md'>
                            <table class="table table-hover border">
                                <thead>
                                    <tr className='bg-dark text-light'>
                                        <th>NAME</th>
                                        <th>EMAIL</th>
                                        <th>CONTACT</th>
                                        <th>CNIC</th>
                                        <th>CITY</th>
                                        <th>COUNTRY</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user) => (
                                        <tr key={user._id}>
                                            <td>{user.Name}</td>
                                            <td>{user.Email}</td>
                                            <td>{user.Contact}</td>
                                            <td>{user.Cnic}</td>
                                            <td>{user.City}</td>
                                            <td>{user.Country}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Booking;