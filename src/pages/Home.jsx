import React from 'react';
import BannerSlider from '../components/BannerSlider';
import AllEquipments from '../pages/AllEquipments'
import Testimonials from '../components/testimonials';


const Home = () => {
    return (
        <div>
            <BannerSlider></BannerSlider>

            <section className="my-12">
                <AllEquipments></AllEquipments>
            </section>

            {/* <section className="my-12 bg-gray-50 py-8">
                SportsCategory 
            </section>

            <section className="my-12">
                hyChooseUs 
            </section> */}

            <section className="my-12 bg-gradient-to-r from-green-100 to-blue-100 py-8">
                <Testimonials></Testimonials>
            </section> 


        </div>
    );
};

export default Home;