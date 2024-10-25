import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
      <h1 className="text-2xl font-bold">Fresh Juices</h1>
      <div className="space-x-4">
        <Link href="/" className="hover:text-yellow-300 transition duration-300 ease-in-out">Home</Link>
        <Link href="/offers" className="hover:text-yellow-300 transition duration-300 ease-in-out">Offers</Link>
        <Link href="/discounts" className="hover:text-yellow-300 transition duration-300 ease-in-out">Discounts</Link>
        <Link href="/contact" className="hover:text-yellow-300 transition duration-300 ease-in-out">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;

