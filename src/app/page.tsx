import Navbar from '../../components/Navbar';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-purple-100 via-yellow-100 to-orange-100">
        {/* Hero Section */}
        <div className="text-center py-10 bg-gradient-to-r from-purple-200 to-orange-200">
          <h2 className="text-4xl font-bold mb-4 text-purple-800">Get the Freshest Juices!</h2>
          <p className="text-xl text-purple-600">Healthy, Delicious, and Made Just for You.</p>
        </div>

        {/* Juice Products Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-8">
          {/* Orange Juice */}
          <div className="bg-white p-4 shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg duration-300">
            <img src="oranges.jpeg" alt="Orange Juice" className="w-full h-48 object-cover mb-4 rounded-lg" />
            <h3 className="text-2xl font-bold text-orange-600 mb-2">Orange Juice</h3>
            <p className="text-gray-700">Freshly squeezed and full of Vitamin C!</p>
            <p className="text-xl font-bold mt-4">$5.00</p>
          </div>

          {/* Apple Juice */}
          <div className="bg-white p-4 shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg duration-300">
            <img src="apppppp.jpeg" alt="Apple Juice" className="w-full h-48 object-cover mb-4 rounded-lg" />
            <h3 className="text-2xl font-bold text-red-600 mb-2">Apple Juice</h3>
            <p className="text-gray-700">Crisp, refreshing, and naturally sweet.</p>
            <p className="text-xl font-bold mt-4">$4.50</p>
          </div>

          {/* Mango Juice */}
          <div className="bg-white p-4 shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg duration-300">
            <img src="mango.jpg" alt="Mango Juice" className="w-full h-48 object-cover mb-4 rounded-lg" />
            <h3 className="text-2xl font-bold text-yellow-600 mb-2">Mango Juice</h3>
            <p className="text-gray-700">Tropical delight with a burst of flavor.</p>
            <p className="text-xl font-bold mt-4">$3.00</p>
          </div>

          {/* Pomegranate Juice */}
          <div className="bg-white p-4 shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg duration-300">
            <img src="202.jpeg" alt="Pomegranate Juice" className="w-full h-48 object-cover mb-4 rounded-lg" />
            <h3 className="text-2xl font-bold text-purple-600 mb-2">Pomegranate Juice</h3>
            <p className="text-gray-700">Rich in antioxidants and flavor!</p>
            <p className="text-xl font-bold mt-4">$4.00</p>
          </div>

          {/* Grape Juice */}
          <div className="bg-white p-4 shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg duration-300">
            <img src="fault.jpg" alt="Grape Juice" className="w-full h-48 object-cover mb-4 rounded-lg" />
            <h3 className="text-2xl font-bold text-purple-600 mb-2">Grape Juice</h3>
            <p className="text-gray-700">Sweet, tangy, and delicious!</p>
            <p className="text-xl font-bold mt-4">$5.00</p>
          </div>

          {/* Berry Juice */}
          <div className="bg-white p-4 shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg duration-300">
            <img src="123456.jpeg" alt="Berry Juice" className="w-full h-48 object-cover mb-4 rounded-lg" />
            <h3 className="text-2xl font-bold text-pink-600 mb-2">Berry Juice</h3>
            <p className="text-gray-700">A perfect blend of mixed berries.</p>
            <p className="text-xl font-bold mt-4">$6.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;