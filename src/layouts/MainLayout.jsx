import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';



const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar */}
           <Navbar></Navbar>

            {/*  Main content area */}
            <div className="flex-grow container mx-auto px-4">
                <Outlet></Outlet>
            </div>

            {/* Footer */}
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;