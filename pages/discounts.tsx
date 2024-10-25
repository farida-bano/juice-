import Navbar from '../components/Navbar';

const Discounts = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-red-200 to-pink-300 relative p-8 text-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/images/discount-bg.jpg')" }}
        ></div>
        <div className="relative z-10">
          {/* Discount Title */}
          <h2 className="text-5xl font-extrabold text-gray-800 mb-4 animate-bounce">
            🌟 Special Discounts 🌟
          </h2>
          <p className="text-xl text-gray-800 mb-8 animate-fadeIn">
            Save more with our exclusive discounts on fresh juices!
          </p>

          {/* Discount Offers Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Orange Juice Discount */}
            <div className="bg-gradient-to-r from-orange-300 to-yellow-400 p-6 shadow-lg rounded-lg transform transition-transform hover:scale-105 hover:shadow-2xl duration-300 hover:rotate-1 animate-fadeInLeft">
              <h3 className="text-3xl font-bold mb-2 text-white">Orange Juice 🍊</h3>
              <p className="text-white text-lg mb-4">20% off - Now only $4.00!</p>
              <button className="mt-4 bg-white text-orange-600 font-semibold px-5 py-3 rounded-full hover:bg-orange-600 hover:text-white transition-all duration-300">
                Shop Now
              </button>
            </div>

            {/* Apple Juice Discount */}
            <div className="bg-gradient-to-r from-green-300 to-teal-400 p-6 shadow-lg rounded-lg transform transition-transform hover:scale-105 hover:shadow-2xl duration-300 hover:-rotate-1 animate-fadeInDown">
              <h3 className="text-3xl font-bold mb-2 text-white">Apple Juice 🍏</h3>
              <p className="text-white text-lg mb-4">15% off - Now only $3.80!</p>
              <button className="mt-4 bg-white text-green-600 font-semibold px-5 py-3 rounded-full hover:bg-green-600 hover:text-white transition-all duration-300">
                Shop Now
              </button>
            </div>

            {/* Mango Juice Discount */}
            <div className="bg-gradient-to-r from-yellow-300 to-orange-400 p-6 shadow-lg rounded-lg transform transition-transform hover:scale-105 hover:shadow-2xl duration-300 hover:rotate-1 animate-fadeInRight">
              <h3 className="text-3xl font-bold mb-2 text-white">Mango Juice 🥭</h3>
              <p className="text-white text-lg mb-4">25% off - Now only $4.50!</p>
              <button className="mt-4 bg-white text-yellow-600 font-semibold px-5 py-3 rounded-full hover:bg-yellow-600 hover:text-white transition-all duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discounts;
