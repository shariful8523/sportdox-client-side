import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import animationData from "../Animations/Animation - 1745929629681.json";


const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <Lottie
                animationData={animationData}
                loop={true}        
                autoplay={true}     
            />
            <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition">
                Back to Home
            </Link>
        </div>
    );
};

export default ErrorPage;
