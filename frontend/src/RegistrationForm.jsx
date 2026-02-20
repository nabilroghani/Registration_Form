import React, { useState } from 'react';
import axios from "axios";
import './RegistrationForm.css'; // CSS import karna mat bhoolna!

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
                { headers: { "Content-Type": "multipart/form-data" } }
            );
            alert("Registration Successful!");
            console.log(response.data);
        } catch (error) {
            console.log(error);
            alert("Registration Failed");
        }
    };

    return (
        <div className="form-container">
            <div className="registration-card">
                <h2>User Registration</h2>
                <form onSubmit={handleForm}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            placeholder="Enter Your Name"
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Phone</label>
                        <input
                            type="number"
                            placeholder="Enter Phone Number"
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Profile Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
                            required
                        />
                    </div>

                    <button type="submit" className="submit-btn">Register</button>
                </form>
            </div>
        </div>
    );
}

export default RegistrationForm;