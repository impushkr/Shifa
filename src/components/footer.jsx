import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* SHOP */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">SHOP</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">New Arrivals</li>
            <li className="hover:underline cursor-pointer">Dresses</li>
            <li className="hover:underline cursor-pointer">Kurtis</li>
            <li className="hover:underline cursor-pointer">Tops</li>
            <li className="hover:underline cursor-pointer">Sale</li>
          </ul>
        </div>

        {/* HELP */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">HELP</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">Customer Service</li>
            <li className="hover:underline cursor-pointer">Track Order</li>
            <li className="hover:underline cursor-pointer">
              Returns & Refunds
            </li>
            <li className="hover:underline cursor-pointer">Shipping Info</li>
            <li className="hover:underline cursor-pointer">FAQs</li>
          </ul>
        </div>

        {/* ABOUT */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">ABOUT SHIFA</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">Our Story</li>
            <li className="hover:underline cursor-pointer">Careers</li>
            <li className="hover:underline cursor-pointer">Sustainability</li>
            <li className="hover:underline cursor-pointer">Press</li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">
            JOIN OUR NEWSLETTER
          </h3>
          <p className="text-sm mb-4">
            Be the first to know about new arrivals & exclusive offers.
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border border-gray-300 rounded-sm text-sm focus:outline-none focus:border-gray-600"
          />
          <button className="mt-3 w-full bg-black text-white py-2 text-sm hover:bg-gray-800 transition">
            SUBSCRIBE
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Shifa. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <span className="hover:underline cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:underline cursor-pointer">
              Terms & Conditions
            </span>
            <span className="hover:underline cursor-pointer">
              Cookie Settings
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
