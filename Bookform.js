import React from 'react'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const Bookform = () => {
    const [username, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phn, setContact] = useState('');
    const [cnic, setCnic] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const handleChangeName = (e) => {
        setName(e.target.value)
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleChangeContact = (e) => {
        setContact(e.target.value)
    }
    const handleChangeNic = (e) => {
        setCnic(e.target.value)
    }
    const handleChangeCity = (e) => {
        setCity(e.target.value)
    }
    const handleChangeCountry = (e) => {
        setCountry(e.target.value)
    }
    const handleSubmit = () => {
        // const navigate = useNavigate();
        fetch('http://localhost:5000/api/roomBook/bookroom', {
            method: 'POST',
            body: JSON.stringify({
                Name: username,
                Email: email,
                Contact: phn,
                Cnic: cnic,
                City: city,
                Country: country
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                // navigate('contactus');
                // Handle data
            })
            .catch((err) => {
                console.log(err.message);
            });

    }

    return (
        <div className='bg-light'>
            <div className="my-5 px-4">
                <h2 className="fw-bold h-font text-center">Provide Your Information</h2>
                <div className="h-line bg-dark"></div>
            </div>



            <div className="bg-white rounded shadow p-4">
                <form>

                    <div className=" mb-3 px-4 text-center">
                        <label className="form-label fw-bold ">Name</label>
                        <input type="text" value={username} className="form-control shadow-none" required onChange={(e) => handleChangeName(e)} />
                    </div>
                    <div className="mb-3 px-4 text-center">
                        <label className="form-label fw-bold">Email</label>
                        <input type="text" value={email} className="form-control shadow-none" required onChange={(e) => handleChangeEmail(e)} />
                    </div>
                    <div className=" mb-3 px-4 text-center">
                        <label className="form-label fw-bold">Contact Number</label>
                        <input type="text" value={phn} className="form-control shadow-none" required onChange={(e) => handleChangeContact(e)} />
                    </div>
                    <div className="  mb-3 px-4 text-center">
                        <label className="form-label fw-bold">NIC</label>
                        <input type="text" value={cnic} className="form-control shadow-none" required onChange={(e) => handleChangeNic(e)} />
                    </div>
                    <div className="  mb-3 px-4 text-center">
                        <label className="form-label fw-bold">CITY</label>
                        <input type="text" value={city} className="form-control shadow-none" required onChange={(e) => handleChangeCity(e)} />
                    </div>
                    <div className=" mb-3 px-4 text-center">
                        <label className="form-label fw-bold">COUNTRY </label>
                        <input type="text" value={country} className="form-control shadow-none" required onChange={(e) => handleChangeCountry(e)} />
                    </div>

                    <Link to="/book"> <button onClick={() => handleSubmit()} type="submit" className=" btn custom-bg text-white shadow-none">SUBMIT</button></Link>


                </form>

            </div>

        </div>




    )
}
export default Bookform