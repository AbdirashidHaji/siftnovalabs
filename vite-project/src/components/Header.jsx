import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-50 animate-slideInDown">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">
            Softnova<span className="text-secondary">Labs</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-dark hover:text-primary transition">Home</Link>
            <Link to="/about" className="text-dark hover:text-primary transition">About</Link>
            <Link to="/services" className="text-dark hover:text-primary transition">Services</Link>
            <Link to="/projects" className="text-dark hover:text-primary transition">Projects</Link>
            <Link to="/contact" className="text-dark hover:text-primary transition">Contact</Link>
          </div>
          
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4 animate-fadeIn">
            <Link to="/" className="block text-dark hover:text-primary transition">Home</Link>
            <Link to="/about" className="block text-dark hover:text-primary transition">About</Link>
            <Link to="/services" className="block text-dark hover:text-primary transition">Services</Link>
            <Link to="/projects" className="block text-dark hover:text-primary transition">Projects</Link>
            <Link to="/contact" className="block text-dark hover:text-primary transition">Contact</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;