import React, { useState } from 'react'
import axios from "axios";

const RegistrationForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        image: null
    });

    const handleForm = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("name", formData.name);
        data.append("email", formData.email);
        data.append("phone", formData.phone);
        data.append("image", formData.image);

        try {
            const response = await axios.post(
                "http://localhost:3000/api/register",
                data,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
            );

            console.log("Success:", response.data);
            alert("Registration Successful!");

        } catch (error) {
            console.log(error);
            alert("Registration Failed");
        }
    };

    return (
        <div>
            <form onSubmit={handleForm}>

                <label>Name:</label>
                <input
                    type="text"
                    placeholder="Enter Your Name"
                    onChange={(e)=> setFormData({
                        ...formData,
                        name: e.target.value
                    })}
                /> <br />

                <label>Email:</label>
                <input
                    type="email"
                    placeholder="Enter Your Email"
                    onChange={(e)=> setFormData({
                        ...formData,
                        email: e.target.value
                    })}
                /> <br />

                <label>Phone:</label>
                <input
                    type="number"
                    placeholder="Enter Your Phone Number"
                    onChange={(e)=> setFormData({
                        ...formData,
                        phone: e.target.value
                    })}
                /> <br />

                <label>Image:</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e)=> setFormData({
                        ...formData,
                        image: e.target.files[0] 
                    })}
                /> <br />

                <button type="submit">Register</button>

            </form>
        </div>
    )
}

export default RegistrationForm;
