import AnimatedText from "./AnimatedText";
const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary to-secondary text-white pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <AnimatedText 
              text="Innovative Digital Solutions" 
              className="text-4xl md:text-6xl font-bold mb-6"
            />
            <AnimatedText
              text="Transforming ideas into reality with cutting-edge technology"
              className="text-xl mb-8"
            />
            <div className="animate-fadeIn" style={{ animationDelay: '0.5s' }}>
              <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition mr-4">
                Get Started
              </button>
              <button className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
              alt="Hero Banner"
              className="rounded-lg shadow-2xl animate-fadeIn" 
              style={{ animationDelay: '0.3s' }}
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-2 origin-top-left"></div>
    </section>
  );
};

export default Hero;