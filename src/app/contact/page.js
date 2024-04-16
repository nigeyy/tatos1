import Link from 'next/link';

const Contact = () => (
  <div className="bg-black min-h-screen text-white">
    {/* Navigation Bar */}
    <nav className="bg-orange-500 text-black py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">NEXT APP - Contact</h1> {/* Updated page title */}
        <ul className="flex">
          <li className="mr-6">
            <Link href="/" legacyBehavior><a className="text-black hover:text-gray-100">Home</a></Link>
          </li>
          <li className="mr-6">
            <Link href="/about" legacyBehavior><a className="text-black hover:text-gray-100">About</a></Link>
          </li>
          <li className="mr-6">
            <Link href="/contact" legacyBehavior><a className="text-black hover:text-gray-100 font-bold">Contact</a></Link> {/* Styling active link */}
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
        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <p className="mt-4">We would love to hear from you!</p>
        <p className="mt-4">Feel free to reach out to us with any questions or inquiries:</p>
      </section>

      <section className="mt-8">
        <div className="flex justify-center">
          <div className="max-w-lg w-full">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="text-lg text-gray-300">Email: <a href="mailto:nigeltony007@gmail.com" className="underline">nigeltony007@gmail.com</a></p>
            <p className="text-lg text-gray-300">Phone: <a href="tel:+918850695769" className="underline">+91 8850695769</a></p>
            <p className="text-lg text-gray-300">Address: 123 Main St, City, Country</p>
          </div>
        </div>
      </section>

      {/* Additional Content */}
      <section className="mt-8">
        <div className="flex justify-center">
          <div className="max-w-lg w-full">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-lg text-gray-300">Have a question or want to discuss a project? Fill out the form below and we'll get back to you as soon as possible.</p>
            <form className="mt-6">
              <input type="text" placeholder="Your Name" className="block w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-orange-500 text-gray-300" />
              <input type="email" placeholder="Your Email" className="mt-4 block w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-orange-500 text-gray-300" />
              <textarea placeholder="Your Message" className="mt-4 block w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-orange-500 text-gray-300" rows="4"></textarea>
              <button className="mt-4 bg-orange-500 text-black px-4 py-2 rounded-lg hover:bg-orange-600">Send Message</button>
            </form>
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

export default Contact;
