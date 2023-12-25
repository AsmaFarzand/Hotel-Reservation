import { useState, useEffect } from "react";


const ContactUs = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getApiData()
    }, [])

    const getApiData = async () => {
        const response = await fetch('http://localhost:5000/api/admin/')
            .then((response) => response.json())

        setUsers(response.message)
    }

    return (
        <div className='bg-light'>
            <dIV className="my-5 px-4">
                <h2 className="fw-bold h-font text-center">USER QUERIES</h2>
                <div className="h-line bg-dark"></div>
            </dIV>

            <div className="row">
                <div class="card border-0 shadow-sm mb-4">
                    <div class="card-body">
                        <div className='table-responsive-md'>
                            <table class="table table-hover border">
                                <thead>
                                    <tr className='bg-dark text-light'>
                                        <th>NAME</th>
                                        <th>EMAIL</th>
                                        <th>SUBJECT</th>
                                        <th>MESSAGES</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user) => (
                                        <tr key={user._id}>
                                            <td>{user.Name}</td>
                                            <td>{user.Email}</td>
                                            <td>{user.Subject}</td>
                                            <td>{user.Messages}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* {users &&
                    users.map((user) => (<div>
                        <p>{user.Name}</p>
                        <p>{user.Email}</p>
                        <p>{user.Subject}</p>
                        <p>{user.Messages}</p>
                    </div>))
                } */}
            </div>
        </div>
    )
}

export default ContactUs
