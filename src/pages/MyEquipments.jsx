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
            fetch(`https://sportdox-server-side.vercel.app/products?userEmail=${user.email}`)
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

    const handleDelete = _id => {
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
                fetch(`https://sportdox-server-side.vercel.app/products/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire("Deleted!", "Your product has been deleted.", "success");
                            const remaining = equipments.filter(item => item._id !== _id);
                            setEquipments(remaining);
                        }
                    })
                    .catch(err => console.error(err));
            }
        });
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="text-xl font-semibold">Loading...</span>
            </div>
        );
    }

    return (
        <div className="p-4">
            <div className="overflow-x-auto">
                <table className="table w-full min-w-[600px]">
                    <thead className="bg-gray-200 text-gray-700">
                        <tr>
                            <th className="py-3 px-4 text-left">Image & Name</th>
                            <th className="py-3 px-4 text-left">Details</th>
                            <th className="py-3 px-4 text-left">Price</th>
                            <th className="py-3 px-4 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {equipments.length > 0 ? (
                            equipments.map((item) => (
                                <tr key={item._id} className="border-b">
                                    <td className="py-3 px-4">
                                        <div className="flex items-center gap-4">
                                            <div className="h-12 w-12 overflow-hidden rounded-full">
                                                <img
                                                    src={item.image}
                                                    alt={item.itemName}
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>
                                            <div>
                                                <div className="font-bold">{item.itemName}</div>
                                                <div className="text-sm text-gray-500">{item.category}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-3 px-4">{item.description}</td>
                                    <td className="py-3 px-4">${item.price}</td>
                                    <td className="py-3 px-4">
                                        <div className="flex flex-col md:flex-row gap-2">
                                            <Link to={`/updateProduct/${item._id}`}>
                                                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition w-full md:w-auto">
                                                    Update
                                                </button>
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(item._id)}
                                                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition w-full md:w-auto"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center py-8 text-gray-500 text-lg">
                                    No products added yet.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyEquipments;
