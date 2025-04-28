import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const AllEquipments = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        const response = await fetch('http://localhost:5000/products')
        const products = await response.json();
        setData(products);
    }

    useEffect(() => {
        getData();
    }, []);

    // Sort: Price Low to High
    const handleSortLowToHigh = () => {
        const sorted = [...data].sort((a, b) => a.price - b.price);
        setData(sorted);
    }

    // Sort: Price High to Low
    const handleSortHighToLow = () => {
        const sorted = [...data].sort((a, b) => b.price - a.price);
        setData(sorted);
    }

    // Sort: Rating High to Low
    const handleSortByRating = () => {
        const sorted = [...data].sort((a, b) => b.rating - a.rating);
        setData(sorted);
    }

    return (
        <div className="p-4">
            
            {/* Sort Buttons */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
                <button 
                    onClick={handleSortLowToHigh} 
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Price: Low to High
                </button>

                <button 
                    onClick={handleSortHighToLow} 
                    className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
                    Price: High to Low
                </button>

                <button 
                    onClick={handleSortByRating} 
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                    Rating: High to Low
                </button>
            </div>

            {/* Product Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {
                    data.map(product => (
                        <ProductCard key={product._id} product={product} />
                    ))
                }
            </div>

        </div>
    );
};

export default AllEquipments;
