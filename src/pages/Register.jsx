import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [redirect, setRedirect] = useState(false);

    const handelRegister = event => {
        event.preventDefault();

        const name = event.target.name.value;
        const photo = event.target.photo.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

       

        // ✅ Password Validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (!passwordRegex.test(password)) {
            Swal.fire({
                title: 'Error!',
                text: 'Password must be at least 6 characters long and include both uppercase and lowercase letters.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
               

                // ✅ Update user profile
                updateProfile(user, {
                    displayName: name,
                    photoURL: photo
                })
                .then(() => {
                  

                    // ✅ Save user to database
                    const newUser = { name, photo, email };
                    fetch('https://sportdox-server-side.vercel.app/users', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(newUser)
                    })
                        .then(res => res.json())
                        .then(data => {
                            
                            if (data.insertedId) {
                                Swal.fire({
                                    title: 'Success!',
                                    text: 'Registration Successfully',
                                    icon: 'success',
                                    confirmButtonText: 'Cool'
                                });
                                setRedirect(true);
                            }
                        });
                })
                

            })
            
    };

    if (redirect) {
        return <Navigate to="/" />;
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
            <form onSubmit={handelRegister} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

                {/* Name Field */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter your name"
                    />
                </div>

                {/* Email Field */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter your email"
                    />
                </div>

                {/* Photo URL Field */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="photo">Photo URL</label>
                    <input
                        type="text"
                        id="photo"
                        name="photo"
                        required
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter photo URL"
                    />
                </div>

                {/* Password Field */}
                <div className="mb-6">
                    <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter your password"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                        * Password must contain at least 6 characters, including uppercase and lowercase letters.
                    </p>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                >
                    Register
                </button>

                {/* Divider */}
                <div className="flex items-center my-6">
                    <div className="flex-grow h-px bg-gray-300"></div>
                    <span className="mx-4 text-gray-400">OR</span>
                    <div className="flex-grow h-px bg-gray-300"></div>
                </div>

                {/* Google Login */}
                <button
                    type="button"
                    className="flex items-center justify-center gap-3 w-full border border-gray-400 py-2 rounded-md hover:bg-gray-100 transition"
                >
                    <FcGoogle size={24} /> Continue with Google
                </button>

                {/* Sign In Redirect */}
                <p className="text-center text-gray-600 mt-4">
                    Already have an account?{' '}
                    <Link to="/login" className="text-blue-500 hover:underline">
                        Sign In
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Register;
