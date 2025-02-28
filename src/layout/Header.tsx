const Header: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="ml-2 text-2xl font-bold text-blue-800">
                TradEx
              </span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a
                href="#features"
                className="border-transparent text-gray-600 hover:border-blue-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="border-transparent text-gray-600 hover:border-blue-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="border-transparent text-gray-600 hover:border-blue-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Testimonials
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
