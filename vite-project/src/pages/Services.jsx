const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "We build responsive, high-performance websites and web applications using modern technologies like React, Next.js, and Node.js.",
      icon: "💻",
      features: ["Custom CMS", "E-commerce", "Web Portals", "API Integration"],
      delay: "0.1s"
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android with beautiful UI and seamless performance.",
      icon: "📱",
      features: ["iOS Apps", "Android Apps", "React Native", "Flutter"],
      delay: "0.2s"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design solutions that enhance usability and create engaging digital experiences.",
      icon: "🎨",
      features: ["Wireframing", "Prototyping", "User Testing", "Design Systems"],
      delay: "0.3s"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and services to power your business applications and data storage needs.",
      icon: "☁️",
      features: ["AWS", "Azure", "Google Cloud", "Serverless"],
      delay: "0.4s"
    },
    {
      title: "AI & ML",
      description: "Artificial Intelligence and Machine Learning solutions to automate processes and gain insights from your data.",
      icon: "🧠",
      features: ["Predictive Analytics", "Chatbots", "Computer Vision", "NLP"],
      delay: "0.5s"
    },
    {
      title: "DevOps",
      description: "Streamline your development and operations with continuous integration and deployment pipelines.",
      icon: "🔄",
      features: ["CI/CD", "Containerization", "Monitoring", "Infrastructure as Code"],
      delay: "0.6s"
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">Our Services</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition animate-fadeInUp"
              style={{ animationDelay: service.delay }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-bold text-dark mb-3">{service.title}</h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <h3 className="font-semibold mb-2">Key Features:</h3>
              <ul className="text-gray-600 space-y-1">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2">✓</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-lg text-center animate-fadeIn" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            We specialize in creating tailored digital solutions for unique business challenges.
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;