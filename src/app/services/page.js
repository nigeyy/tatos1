import Link from 'next/link';

const Services = () => (
  <div className="bg-black min-h-screen text-white">
    {/* Navigation Bar */}
    <nav className="bg-orange-500 text-black py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">NEXT APP - Services</h1> {/* Updated page title */}
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
            <Link href="/services" legacyBehavior><a className="text-black hover:text-gray-100 font-bold">Services</a></Link> {/* Styling active link */}
          </li>
        </ul>
      </div>
    </nav>

    {/* Content */}
    <div className="container mx-auto py-8 text-center">
      <section>
        <h2 className="text-2xl font-semibold">Our Services</h2>
        <p className="mt-4">We offer a variety of services to meet your needs:</p>
        <ul className="mt-2 text-left">
          <li>Web Development</li>
          <li>Mobile App Development</li>
          <li>UI/UX Design</li>
          <li>Graphic Design</li>
          <li>Digital Marketing</li>
          {/* Additional services */}
          <li>Content Writing</li>
          <li>SEO Optimization</li>
          <li>Social Media Management</li>
        </ul>
      </section>
    </div>

    {/* Call to Action */}
    <section className="bg-gray-800 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
        <p className="text-lg text-gray-300 mb-6">Contact us today to discuss your project!</p>
        <Link href="/contact" legacyBehavior>
          <a className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-lg font-semibold transition duration-300">Contact Us</a>
        </Link>
      </div>
    </section>

    {/* Footer */}
    <footer className="text-center py-4">
      <p>This is footer</p>
    </footer>
  </div>
);

export default Services;
