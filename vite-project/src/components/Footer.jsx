const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="animate-fadeIn" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-2xl font-bold mb-4">
              Softnova<span className="text-secondary">Labs</span>
            </h3>
            <p className="text-gray-400">
              Innovating digital solutions for a better tomorrow.
            </p>
          </div>

          <div className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition">About</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white transition">Services</a></li>
              <li><a href="/projects" className="text-gray-400 hover:text-white transition">Projects</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <div className="animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Web Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Mobile Apps</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">UI/UX Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Cloud Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">AI & ML</a></li>
            </ul>
          </div>

          <div className="animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="text-gray-400 not-italic">
              <p>12th Tech Street</p>
              <p>Nairobi City, 12345</p>
              <p className="mt-2">Email: info@softnovalabs.com</p>
              <p>Phone: +2547 654-3210</p>
            </address>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Softnova Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;