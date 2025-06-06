import React, { useContext } from 'react';

import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';


const AddEquipment = () => {
    const { user } = useContext(AuthContext); 

    const handleAdd = (e) => {
        e.preventDefault();
        const form = e.target;

        const image = form.image.value;
        const itemName = form.itemName.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const stock = form.stock.value;
        const processingTime = form.processingTime.value;
        const customization = form.customization.value;
        const description = form.description.value;
        const userEmail = user?.email;  
        const userName = user?.displayName || "Anonymous";  

        const formData = { image, itemName, category, price, rating, stock, processingTime, customization, description, userEmail, userName }

        

        // Send to backend/database here
        fetch('https://sportdox-server-side.vercel.app/products', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
               
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

        form.reset();
    };

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg mt-10 rounded-xl">
            <h2 className="text-3xl font-bold mb-6 text-center">Add New Equipment</h2>
            <form onSubmit={handleAdd} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-full" required />
                <input type="text" name="itemName" placeholder="Item Name" className="input input-bordered w-full" required />
                <input type="text" name="category" placeholder="Category Name" className="input input-bordered w-full" required />
                <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" required />
                <input type="text" name="rating" placeholder="Rating (e.g. 4.5)" className="input input-bordered w-full" required />
                <input type="text" name="stock" placeholder="Stock Status (Quantity)" className="input input-bordered w-full" required />
                <input type="text" name="processingTime" placeholder="Processing Time (e.g. 3-5 days)" className="input input-bordered w-full" required />
                <input type="text" name="customization" placeholder="Customization (e.g. bat with extra grip)" className="input input-bordered w-full" />
                <textarea name="description" placeholder="Description" className="textarea textarea-bordered w-full col-span-1 md:col-span-2" required></textarea>

                <input type="email" name="userEmail" value={user?.email} className="input input-bordered w-full bg-gray-100" readOnly />
                <input type="text" name="userName" value={user?.displayName || "Anonymous"} className="input input-bordered w-full bg-gray-100" readOnly />

                <div className="col-span-1 md:col-span-2">
                    <button type="submit" className="btn btn-primary w-full">Add Equipment</button>
                </div>
            </form>
        </div>
    );
};

export default AddEquipment;
