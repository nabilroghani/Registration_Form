import React, { useEffect, useState } from 'react';
import axios from "axios";
import './UserList.css'; // CSS Import

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                // Backend URL check karlein: /api/users ya /api/all-data
                const res = await axios.get("http://localhost:3000/api/all-data");
                setUsers(res.data);
                setLoading(false);
            } catch (error) {
                console.log("Fetch Error", error);
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    if (loading) return <h2 style={{ textAlign: 'center' }}>Loading Users...</h2>;

    return (
        <div className="list-container">
            <h2 className="list-title">Registered Users</h2>
            
            <div className="user-grid">
                {users.length > 0 ? (
                    users.map((user) => (
                        <div key={user._id} className="user-card">
                            <img 
                                src={user.image} 
                                alt={user.name} 
                                className="user-image" 
                            />
                            <div className="user-info">
                                <h3>{user.name}</h3>
                                <p>📧 {user.email}</p>
                                <span className="phone-tag">📞 {user.phone}</span>
                            </div>
                        </div>
                    ))
                ) : (
                    <p style={{ textAlign: 'center', gridColumn: '1/-1' }}>No users found.</p>
                )}
            </div>
        </div>
    );
}

export default UserList;