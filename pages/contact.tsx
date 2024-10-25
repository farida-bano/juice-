import Navbar from '../components/Navbar';

const Contact = () => {
  return (
    <div>
      <Navbar />
      {/* Light Peach/Orange Background */}
      <div className="min-h-screen bg-gradient-to-r from-orange-100 via-peach-100 to-pink-100 flex justify-center items-center">
        {/* Centered Contact Form */}
        <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-4xl mb-6 font-bold text-center text-purple-700">Contact Us</h1>
          <form>
            {/* Name Input */}
            <div className="mb-6">
              <label className="block text-sm font-bold mb-2 text-gray-700">Name</label>
              <input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 ease-in-out" type="text" placeholder="Your Name" />
            </div>
            {/* Email Input */}
            <div className="mb-6">
              <label className="block text-sm font-bold mb-2 text-gray-700">Email</label>
              <input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 ease-in-out" type="email" placeholder="Your Email" />
            </div>
            {/* Message Input */}
            <div className="mb-6">
              <label className="block text-sm font-bold mb-2 text-gray-700">Message</label>
              <textarea className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 ease-in-out" rows="5" placeholder="Your Message"></textarea>
            </div>
            {/* Submit Button */}
            <button className="w-full bg-purple-500 text-white px-4 py-3 rounded-lg hover:bg-purple-600 transition-transform transform hover:scale-105 duration-300 ease-in-out">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

