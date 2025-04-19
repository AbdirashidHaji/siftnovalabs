const AnimatedText = ({ text, className = '' }) => {
  return (
    <div className={`flex flex-wrap overflow-hidden ${className}`}>
      {text.split(' ').map((word, index) => (
        <span 
          key={index}
          className="mr-3 animate-fadeInUp"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {word}
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;