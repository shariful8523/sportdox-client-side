import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import Home from '../pages/Home';



const MainLayout = () => {
    return (
        <div className="w-11/12 mx-auto justify-center">
            
            {/* Navbar */}
           <Navbar></Navbar>

            {/*  Main content area */}
            <div className="flex-grow container mx-auto px-4">
                <Outlet>
                    
                </Outlet>
            </div>

            {/* Footer */}
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;