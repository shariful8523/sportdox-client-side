import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyEquipments = () => {
    const { user } = useContext(AuthContext);
   
    const [equipments, setEquipments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user) {
            setLoading(true);
            fetch(`http://localhost:5000/products?userEmail=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setEquipments(data);
                    setLoading(false);
                })
                .catch(err => {
                    console.error(err);
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, [user]);

    const handelDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/products/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {  
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your product has been deleted.",
                                icon: "success"
                            });
    
                           
                            const remaining = equipments.filter(item => item._id !== _id);
                            setEquipments(remaining);
                        }
                    })
                    .catch(err => {
                        console.error(err);
                    });
            }
        });
    };
    

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Image and Name</th>
                            <th>Details</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
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
                                        <div className="flex gap-2">
                                            <Link to={`/updateProduct/${item._id}`}>
                                                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">Update</button>
                                            </Link>
                                            <button onClick={() => handelDelete(item._id)} className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition">Delete</button>
                                        </div>
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
        </div >
    );
};

export default MyEquipments;
