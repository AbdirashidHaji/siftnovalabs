import React from 'react';
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">About Softnova Labs</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Pioneering digital transformation since 2015
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center mb-20">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fadeIn">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
              alt="Our Team" 
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2 md:pl-12 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-3xl font-bold text-dark mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2015, Softnova Labs began as a small team of passionate developers with a vision to create innovative digital solutions that make a difference.
            </p>
            <p className="text-gray-600 mb-4">
              Today, we've grown into a full-service digital agency with clients across multiple industries, helping businesses transform their ideas into reality through technology.
            </p>
            <p className="text-gray-600">
              Our commitment to excellence, creativity, and customer satisfaction has been the driving force behind our success.
            </p>
          </div>
        </div>
        
        <div className="py-12 bg-light rounded-xl">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-3xl font-bold text-dark mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do at Softnova Labs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "We constantly push boundaries to deliver cutting-edge solutions.",
                icon: "🚀",
                delay: "0.1s"
              },
              {
                title: "Integrity",
                description: "Honesty and transparency in all our dealings.",
                icon: "🤝",
                delay: "0.2s"
              },
              {
                title: "Excellence",
                description: "We strive for perfection in everything we create.",
                icon: "🏆",
                delay: "0.3s"
              }
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md text-center animate-fadeInUp"
                style={{ animationDelay: value.delay }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;