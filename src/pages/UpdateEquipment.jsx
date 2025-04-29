import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateEquipment = () => {
    const loadupdateproduct = useLoaderData();

    const {
        _id, image, itemName, category, price, rating, description,
        customization, processingTime, stock, userEmail, userName
    } = loadupdateproduct;

    const handleUpdate = (e) => {
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
        

        const formData = {
            image, itemName, category, price, rating,
            stock, processingTime, customization,
            description, userEmail, userName
        };

        fetch(`https://sportdox-server-side.vercel.app/products/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success && data.modified) {
                  Swal.fire({
                    title: 'Success!',
                    text: 'Product Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  });
                } else if (data.success && !data.modified) {
                  Swal.fire({
                    title: 'No Changes!',
                    text: 'You didn\'t change anything.',
                    icon: 'info',
                    confirmButtonText: 'Okay'
                  });
                } else {
                  Swal.fire({
                    title: 'Error!',
                    text: 'Product not found!',
                    icon: 'error',
                    confirmButtonText: 'Okay'
                  });
                }
            });
    };

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg mt-10 rounded-xl">
            <h2 className="text-3xl font-bold mb-6 text-center">Update Equipment</h2>
            <form onSubmit={handleUpdate} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" name="image" defaultValue={image} placeholder="Image URL" className="input input-bordered w-full" required />
                <input type="text" name="itemName" defaultValue={itemName} placeholder="Item Name" className="input input-bordered w-full" required />
                <input type="text" name="category" defaultValue={category} placeholder="Category Name" className="input input-bordered w-full" required />
                <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" required />
                <input type="text" name="rating" defaultValue={rating} placeholder="Rating (e.g. 4.5)" className="input input-bordered w-full" required />
                <input type="text" name="stock" defaultValue={stock} placeholder="Stock Status (Quantity)" className="input input-bordered w-full" required />
                <input type="text" name="processingTime" defaultValue={processingTime} placeholder="Processing Time (e.g. 3-5 days)" className="input input-bordered w-full" required />
                <input type="text" name="customization" defaultValue={customization} placeholder="Customization (e.g. bat with extra grip)" className="input input-bordered w-full" />
                <textarea name="description" defaultValue={description} placeholder="Description" className="textarea textarea-bordered w-full col-span-1 md:col-span-2" required></textarea>
                <input type="email" name="userEmail" defaultValue={userEmail} className="input input-bordered w-full bg-gray-100" readOnly />
                <input type="text" name="userName" defaultValue={userName} className="input input-bordered w-full bg-gray-100" readOnly />
                <div className="col-span-1 md:col-span-2">
                    <button type="submit" className="btn btn-primary w-full">Update Equipment</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateEquipment;
