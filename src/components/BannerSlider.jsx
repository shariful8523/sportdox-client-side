import FeaturesSection from "./FeaturesSection";


const BannerSlider = () => {
    return (
        <div>
            <div
                className="hero min-h-[60vh] mt-5 rounded-xl overflow-hidden"
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co.com/SwSDkmJr/sportsstore1.jpg)",
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome to sportdox</h1>
                        <p className="mb-5">
                            Discover the best quality sports equipment for all your needs.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

           <FeaturesSection></FeaturesSection>
        </div>
    );
};

export default BannerSlider;
