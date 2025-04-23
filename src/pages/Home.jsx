import React from 'react';
import BannerSlider from '../components/BannerSlider';
import AllEquipments from '../pages/AllEquipments'
import Testimonials from '../components/testimonials';
import WhyChooseUs from '../components/WhyChooseUs';




const Home = () => {
    return (
        <div>
            <BannerSlider></BannerSlider>

            <section className="my-12">
                <AllEquipments></AllEquipments>
            </section>

           

            <section className="my-12">
                <WhyChooseUs></WhyChooseUs>
            </section>

            <section className="my-12 bg-gradient-to-r from-green-100 to-blue-100 py-8">
                <Testimonials></Testimonials>
            </section> 


        </div>
    );
};

export default Home;