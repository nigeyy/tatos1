import Link from 'next/link';

const About = () => (
  <div className="bg-black min-h-screen text-white">
    {/* Navigation Bar */}
    <nav className="bg-orange-500 text-black py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">NEXT APP - About</h1> {/* Updated page title */}
        <ul className="flex">
          <li className="mr-6">
            <Link href="/" legacyBehavior><a className="text-black hover:text-gray-100">Home</a></Link>
          </li>
          <li className="mr-6">
            <Link href="/about" legacyBehavior><a className="text-black hover:text-gray-100 font-bold">About</a></Link> {/* Styling active link */}
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
        <h2 className="text-2xl font-semibold">About Us</h2>
        <p className="mt-4">We are a passionate team of developers and designers dedicated to creating innovative solutions for our clients. Our journey began with a simple idea: to combine our expertise in technology and design to deliver exceptional results.</p>
      </section>

      <section className="mt-12">
        <h3 className="text-xl font-semibold">Our Mission</h3>
        <p className="mt-4">Our mission is to empower businesses with cutting-edge technology and design, helping them thrive in the digital world. We believe that by understanding our clients' unique challenges and goals, we can tailor solutions that drive growth and success.</p>
      </section>

      <section className="mt-12">
        <h3 className="text-xl font-semibold">Our Team</h3>
        <p className="mt-4">Meet the talented individuals who make our team extraordinary. With diverse backgrounds and expertise, we collaborate seamlessly to bring ideas to life and exceed expectations.</p>
        {/* Add team members section or links to individual profiles */}
      </section>
    </div>

    {/* Footer */}
    <footer className="text-center py-4">
      <p>This is footer</p>
    </footer>
  </div>
);

export default About;
