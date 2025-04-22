import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const AllEquipments = () => {
    const [data, setdata] = useState([]);

    const getData = async () => {
        const response = await fetch('http://localhost:5000/products')
        const data = await response.json();
        setdata(data);

    }
    useEffect(() => {
        getData();
    }, [])

    console.log(data)

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-4">
            {
                data.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))
            }
        </div>
    );
};

export default AllEquipments;
