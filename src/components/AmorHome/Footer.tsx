const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-8">
          <div className="text-4xl font-bold text-pink-400">Amor</div>
          <p className="text-lg opacity-80 max-w-3xl mx-auto leading-relaxed">
            Empowering seniors to make informed health decisions with trusted product comparisons and expert recommendations.
          </p>
          <div className="flex justify-center space-x-8 text-lg flex-wrap gap-y-2">
            <a href="#" className="hover:text-pink-400 transition-colors">About</a>
            <a href="#" className="hover:text-pink-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-pink-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-pink-400 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
