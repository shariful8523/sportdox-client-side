import React, { useContext } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const Navbar = () => {
    const { user, logoutUser, loading } = useContext(AuthContext);
    const navigate = useNavigate(); 

    const handleLogout = () => {
        logoutUser()
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Logged Out!',
                    text: 'You have been logged out successfully!',
                    timer: 1500,
                    confirmButtonText: 'Cool'
                });
                navigate('/'); 
            })
            .catch(err => console.error(err));
    };

    const links = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/equipment">All Sports Equipment</NavLink></li>
            <li><NavLink to="/addequipment">Add Equipment</NavLink></li>
            <li><NavLink to="/my-equipment">My Equipment List</NavLink></li>
        </>
    );

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-spinner loading-lg text-blue-500"></span>
            </div>
        );
    }

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <img className='w-10' src={logo} alt="Logo" />
                <NavLink to="/" className="btn btn-ghost normal-case text-xl">sportdox</NavLink>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            <div className="navbar-end">
                {
                    user ? (
                        <div className="flex items-center gap-3">
                            {/* User Name */}
                            <span className="font-semibold text-gray-700">{user.displayName || 'User'}</span>
                            {/* Logout button */}
                            <button onClick={handleLogout} className="btn btn-sm btn-error">Logout</button>
                        </div>
                    ) : (
                        <>
                            <NavLink to="/login" className="btn btn-sm mr-2">Login</NavLink>
                            <NavLink to="/register" className="btn btn-sm">Register</NavLink>
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default Navbar;
