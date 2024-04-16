import Link from 'next/link';

const Home = () => (
  <div className="bg-black min-h-screen text-white">
    {/* Navigation Bar */}
    <nav className="bg-orange-500 text-black py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">NEXT APP</h1>
        <ul className="flex">
          <li className="mr-6">
            <Link href="/" legacyBehavior><a className="text-black hover:text-gray-100">Home</a></Link>
          </li>
          <li className="mr-6">
            <Link href="/about" legacyBehavior><a className="text-black hover:text-gray-100">About</a></Link>
          </li>
          <li className="mr-6">
            <Link href="/contact" legacyBehavior><a className="text-black hover:text-gray-100">Contact</a></Link>
          </li>
          <li>
            <Link href="/services" legacyBehavior><a className="text-black hover:text-gray-100">Services</a></Link>
          </li>
        </ul>
      </div>
    </nav>

    {/* Content */}
    <div className="container mx-auto py-8 text-center">
      <section>
        <h2 className="text-2xl font-semibold">Welcome to Our Home Page</h2>
        <p className="mt-4">Thank you for visiting our website!</p>
        <p className="mt-4">We specialize in creating amazing web experiences.</p>
        <p className="mt-4">Explore our services and contact us for inquiries.</p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="text-gray-300">We build responsive and scalable web applications.</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Mobile App Development</h3>
            <p className="text-gray-300">We create engaging mobile apps for iOS and Android platforms.</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
            <p className="text-gray-300">We design user-friendly interfaces with a focus on user experience.</p>
          </div>
        </div>
      </section>
    </div>

    {/* Footer */}
    <footer className="text-center py-4">
      <p>This is footer</p>
    </footer>
  </div>
);

export default Home;
