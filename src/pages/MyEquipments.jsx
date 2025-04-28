import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';


const MyEquipments = () => {
    const { user } = useContext(AuthContext); // লগইন করা ইউজারের তথ্য নেয়া
    const [equipments, setEquipments] = useState([]);
    const [loading, setLoading] = useState(true); // লোডিং স্টেট

    useEffect(() => {
        // যদি ইউজার লগইন থাকে
        if (user) {
            setLoading(true); // লোডিং শুরু
            // ইউজারের ইমেইল দিয়ে পণ্য ফেচ করা
            fetch(`http://localhost:5000/products?userEmail=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setEquipments(data);
                    setLoading(false); // লোডিং শেষ
                })
                .catch(err => {
                    console.error(err);
                    setLoading(false); // লোডিং শেষ
                });
        } else {
            setLoading(false); // যদি ইউজার লগইন না থাকে
        }
    }, [user]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
      
            <div className="overflow-x-auto">
                <table className="table">
                    {/* Table Header */}
                    <thead>
                        <tr>
                            <th>Image and Name</th>
                            <th>Details</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        {equipments.length > 0 ? (
                            equipments.map((item) => (
                                <tr key={item._id}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={item.image}
                                                        alt={item.itemName}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{item.itemName}</div>
                                                <div className="text-sm opacity-50">{item.category}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.description}</td>
                                    <td>${item.price}</td>
                                    <td>
                                        <button className="btn btn-ghost btn-xs">Update</button>
                                        <button className="btn btn-ghost btn-xs">Delete</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center">No products added yet.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyEquipments;
