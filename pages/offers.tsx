import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';

const Offers = () => {
  // Timer for limited-time offers
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour countdown

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Convert timeLeft into hours, minutes, and seconds
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-yellow-100 to-yellow-300 p-8 text-center">
        {/* Offers Title */}
        <h2 className="text-4xl font-bold text-gray-800 mb-6 animate-pulse">Limited Time Offers!</h2>
        <p className="text-lg text-gray-700 mb-4">Get up to 30% off on selected juices. Don't miss out!</p>

        {/* Countdown Timer */}
        <div className="text-2xl font-bold text-red-600 mb-8">
          Hurry! Offer ends in: <span className="animate-pulse">{formatTime(timeLeft)}</span>
        </div>

        {/* Offer Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Orange Juice Offer */}
          <div className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
            <img src="/images/orange.jpg" alt="Orange Juice" className="w-full h-48 object-cover mb-4 rounded-lg" />
            <h3 className="text-2xl font-bold text-orange-600 mb-2">Orange Juice</h3>
            <p className="text-gray-700">Now only <span className="text-xl font-bold">$3.50</span> (30% off)</p>
            <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition duration-300">
              Shop Now
            </button>
          </div>

          {/* Apple Juice Offer */}
          <div className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
            <img src="/images/apple.jpg" alt="Apple Juice" className="w-full h-48 object-cover mb-4 rounded-lg" />
            <h3 className="text-2xl font-bold text-green-600 mb-2">Apple Juice</h3>
            <p className="text-gray-700">Now only <span className="text-xl font-bold">$4.00</span> (20% off)</p>
            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300">
              Shop Now
            </button>
          </div>

          {/* Mango Juice Offer */}
          <div className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
            <img src="/images/mango.jpg" alt="Mango Juice" className="w-full h-48 object-cover mb-4 rounded-lg" />
            <h3 className="text-2xl font-bold text-yellow-600 mb-2">Mango Juice</h3>
            <p className="text-gray-700">Now only <span className="text-xl font-bold">$5.00</span> (25% off)</p>
            <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;

