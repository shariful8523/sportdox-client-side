import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { MdPhone } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Website Info */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Sportdox</h2>
          <p className="text-gray-400">
            Your one-stop platform for all kinds of sports equipment. Explore, buy, and enjoy the game!
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p className="flex items-center gap-2 text-gray-300">
            <MdPhone /> +880 1234-567890
          </p>
          <p className="flex items-center gap-2 text-gray-300 mt-2">
            <FaEnvelope /> support@sportdox.com
          </p>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <a href="#" className="text-blue-500 hover:text-white transition"><FaFacebookF size={20} /></a>
            <a href="#" className="text-pink-500 hover:text-white transition"><FaInstagram size={20} /></a>
            <a href="#" className="text-blue-400 hover:text-white transition"><FaTwitter size={20} /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-10 border-t border-gray-700 pt-6 text-sm">
        &copy; {new Date().getFullYear()} Sportdox. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
