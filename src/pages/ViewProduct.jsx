import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ProductCard = () => {
  const navigate = useNavigate();
  const loadProductDetails = useLoaderData();
  const { _id, image, itemName, categoryName, price, rating, description, customization, processingTime, stockStatus } = loadProductDetails;

  const handelDelete = _id => {
    console.log(_id);

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
            Swal.fire({
              title: "Deleted!",
              text: "Your product has been deleted.",
              icon: "success"
            })
            .then(() => {
              navigate("/");
            })


          })
      }
    });
  }


  return (
    <div className="flex flex-col md:flex-row w-full mt-6 gap-6 p-6 bg-white shadow-lg rounded-xl">

      {/* Image Section */}
      <div className="w-full md:w-[45%]">
        <img src={image} className="w-full h-[300px] md:h-[500px] object-cover rounded-lg shadow-2xl" alt={itemName} />
      </div>

      {/* Details Section */}
      <div className="w-full md:w-[55%] flex flex-col justify-between">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">{itemName}</h1>

        <div className="mb-2">
          <p className="text-lg md:text-xl font-semibold text-gray-600">Category: <span className="font-normal">{categoryName}</span></p>
          <p className="text-lg md:text-xl font-semibold text-gray-600">Price: <span className="font-normal text-green-500">$ {price}  </span></p>
          <p className="text-lg md:text-xl font-semibold text-gray-600">
            Rating: <span className="font-normal text-yellow-500">{rating} <FaStar className="inline" /></span>
          </p>
          <p className="text-lg md:text-xl font-semibold text-gray-600">Customization: <span className="font-normal">{customization}</span></p>
          <p className="text-lg md:text-xl font-semibold text-gray-600">Processing Time: <span className="font-normal">{processingTime}</span></p>
          <p className="text-lg md:text-xl font-semibold text-gray-600">Stock Status: <span className="font-normal">{stockStatus}</span></p>
          <p className="text-md md:text-lg text-gray-600 mt-3"> <span className='text-xl font-bold'>Product Description</span> : {description}</p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">Update</button>
          <button onClick={() => handelDelete(_id)} className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
