import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";


const ProductCard = ({ product }) => {
    const { _id, image, itemName, categoryName, price, rating } = product;

    return (
        <div className="card w-80 bg-white shadow-xl rounded-2xl overflow-hidden">
            <img src={image} alt={itemName} className="h-48 w-full object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-1">{itemName}</h2>
                <p className="text-sm text-gray-600 mb-1">Category: <span className="font-medium">{categoryName}</span></p>
                <div className="flex items-center gap-1 text-yellow-500 mb-2">
                    <FaStar />
                    <span className="text-sm text-gray-700">{rating || 'N/A'}</span>
                </div>
                <p className="text-lg font-bold text-green-600">${price}</p>
                <div className="mt-4">
                    <Link to={`/viewProduct/${_id}`} className="btn btn-sm btn-primary w-full">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
