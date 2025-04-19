import Hero from '../components/Hero';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import Contact from './Contact';
import React from 'react';

const Home = () => {
  return (
    <div>
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Our Core Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive digital solutions to help your business grow in the digital world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                description: "Custom websites and web applications tailored to your business needs.",
                icon: "💻",
                delay: "0.1s"
              },
              {
                title: "Mobile Apps",
                description: "iOS and Android applications with stunning UI and great performance.",
                icon: "📱",
                delay: "0.2s"
              },
              {
                title: "UI/UX Design",
                description: "Beautiful and intuitive interfaces that enhance user experience.",
                icon: "🎨",
                delay: "0.3s"
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition animate-fadeInUp"
                style={{ animationDelay: service.delay }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fadeIn">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: "0.1s" }}>
            Let's build something amazing together. Get in touch with our team today.
          </p>
          <div className="animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition mr-4">
              Get Started
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition">
              Learn More
            </button>
          </div>
        </div>
      </section>
      <About/>
      <Services />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;