
import React from 'react';
import { Link } from 'react-router-dom'
import AnimatedText from '../components/AnimatedText';
const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured online store with custom CMS and payment integration.",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      delay: "0.1s"
    },
    {
      title: "Health & Fitness App",
      description: "Mobile application for tracking workouts, nutrition, and health metrics.",
      category: "Mobile Development",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      delay: "0.2s"
    },
    {
      title: "Corporate Website",
      description: "Modern responsive website for a financial services company.",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      delay: "0.3s"
    },
    {
      title: "AI Chatbot",
      description: "Natural language processing chatbot for customer support.",
      category: "AI & ML",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      delay: "0.4s"
    },
    {
      title: "Inventory Management",
      description: "Cloud-based inventory tracking system with analytics dashboard.",
      category: "Cloud Solutions",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      delay: "0.5s"
    },
    {
      title: "Travel Booking UI",
      description: "User interface design for a travel booking application.",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      delay: "0.6s"
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">Our Projects</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful digital solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition animate-fadeInUp"
              style={{ animationDelay: project.delay }}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block bg-primary text-white text-xs px-2 py-1 rounded-full mb-2">
                  {project.category}
                </span>
                <h2 className="text-xl font-bold text-dark mb-2">{project.title}</h2>
                <p className="text-gray-600">{project.description}</p>
                <button className="mt-4 text-primary font-semibold hover:underline">
                  View Case Study →
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-fadeIn" style={{ animationDelay: "0.2s" }}>
          <button className="border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition">
            Load More Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;