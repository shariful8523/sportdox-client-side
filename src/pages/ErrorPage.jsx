import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
            <h2 className="text-2xl md:text-4xl font-semibold mb-2 text-gray-700">Oops! Page not found.</h2>
            <p className="text-gray-600 mb-6 text-center max-w-md">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition">
                Back to Home
            </Link>
        </div>
    );
};

export default ErrorPage;
