import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import {
  ArrowRight,
  BarChart2,
  Cpu,
  DollarSign,
  Shield,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";

const LandingPage: React.FC = () => {
  const [email, setEmail] = useState("");

  const notify = () =>
    toast(`Thank you for joining our waitlist with email: ${email}`);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    notify();
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-20">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Revolutionize Your</span>
                  <span className="block text-blue-600">
                    Investment Strategy
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0">
                  TradEx leverages AI-powered insights to provide deep financial
                  analysis, predictive insights, and market intelligence on
                  JAXA-listed companies, bridging the gap between retail and
                  institutional investors.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <form onSubmit={handleSubmit} className="sm:flex">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      className="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 sm:max-w-xs rounded-md"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <button
                        type="submit"
                        className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-3 md:text-lg md:px-6"
                      >
                        Join Waitlist
                        <ArrowRight className="ml-2 h-5 w-5" />
                        <ToastContainer
                          position="bottom-center"
                          autoClose={5000}
                          hideProgressBar={false}
                          newestOnTop={false}
                          closeOnClick={false}
                          rtl={false}
                          pauseOnFocusLoss
                          draggable
                          pauseOnHover
                          theme="light"
                        />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="/api/placeholder/800/600"
            alt="Trading dashboard"
          />
        </div>
      </div>

      {/* Feature Section */}
      <div id="features" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              Features
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              AI-Powered Fundamental Analysis
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
              Make data-driven investment decisions with our cutting-edge AI
              technology.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  <BarChart2 className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900">
                  Deep Financial Analysis
                </h3>
                <p className="mt-2 text-base text-gray-600 text-center">
                  Comprehensive analysis of financial statements, earnings
                  reports, and key performance indicators.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900">
                  Predictive Insights
                </h3>
                <p className="mt-2 text-base text-gray-600 text-center">
                  AI-driven forecasting models to predict stock performance and
                  market trends.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  <Cpu className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900">
                  LLM-Based Models
                </h3>
                <p className="mt-2 text-base text-gray-600 text-center">
                  Advanced language models that analyze reports and uncover
                  hidden investment opportunities.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900">
                  Community Insights
                </h3>
                <p className="mt-2 text-base text-gray-600 text-center">
                  Foster a community of data-driven investors through shared
                  analytics and discussions.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900">
                  Transparent & Trustworthy
                </h3>
                <p className="mt-2 text-base text-gray-600 text-center">
                  Unbiased and explainable financial insights you can trust for
                  your investment decisions.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  <DollarSign className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900">
                  Real-time Market Intelligence
                </h3>
                <p className="mt-2 text-base text-gray-600 text-center">
                  Stay ahead with up-to-the-minute financial data and market
                  analysis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              Pricing
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Plans for Every Investor
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
              From casual investors to professional fund managers, we have a
              plan that fits your needs.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Free Plan */}
            <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
              <div className="px-6 py-8">
                <h3 className="text-2xl font-bold text-gray-900">Free</h3>
                <p className="mt-4 text-gray-600">
                  For beginners and casual investors
                </p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">
                    $0
                  </span>
                  <span className="text-base font-medium text-gray-500">
                    /mo
                  </span>
                </p>
              </div>
              <div className="px-6 py-8">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Star className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-base text-gray-700">
                      Basic financial statement analysis
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Star className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-base text-gray-700">
                      Limited news sentiment analysis
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Star className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-base text-gray-700">
                      Community access
                    </p>
                  </li>
                </ul>
                <div className="mt-8">
                  <a
                    href="#"
                    className="w-full block text-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 border-blue-600"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
              <div className="px-6 py-8">
                <h3 className="text-2xl font-bold text-gray-900">Premium</h3>
                <p className="mt-4 text-gray-600">For active investors</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">
                    $25
                  </span>
                  <span className="text-base font-medium text-gray-500">
                    /mo
                  </span>
                </p>
              </div>
              <div className="px-6 py-8">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Star className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-base text-gray-700">
                      Full access to AI analysis
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Star className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-base text-gray-700">
                      Deep financial insights
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Star className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-base text-gray-700">
                      AI-generated earnings summaries
                    </p>
                  </li>
                </ul>
                <div className="mt-8">
                  <a
                    href="#"
                    className="w-full block text-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Subscribe
                  </a>
                </div>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="bg-white overflow-hidden shadow-lg border-2 border-blue-500 rounded-lg divide-y divide-gray-200">
              <div className="px-6 py-8 relative">
                <span className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
                  Popular
                </span>
                <h3 className="text-2xl font-bold text-gray-900">Pro</h3>
                <p className="mt-4 text-gray-600">
                  For institutional investors
                </p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">
                    $79
                  </span>
                  <span className="text-base font-medium text-gray-500">
                    /mo
                  </span>
                </p>
              </div>
              <div className="px-6 py-8">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Star className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-base text-gray-700">
                      Advanced AI-powered analytics
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Star className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-base text-gray-700">
                      Real-time financial forecasting
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Star className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-base text-gray-700">
                      Custom API access
                    </p>
                  </li>
                </ul>
                <div className="mt-8">
                  <a
                    href="#"
                    className="w-full block text-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Subscribe
                  </a>
                </div>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
              <div className="px-6 py-8">
                <h3 className="text-2xl font-bold text-gray-900">Enterprise</h3>
                <p className="mt-4 text-gray-600">For financial institutions</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">
                    Custom
                  </span>
                </p>
              </div>
              <div className="px-6 py-8">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Star className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-base text-gray-700">
                      White-label solutions
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Star className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-base text-gray-700">
                      API integrations
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Star className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-base text-gray-700">
                      Dedicated advisory services
                    </p>
                  </li>
                </ul>
                <div className="mt-8">
                  <a
                    href="#"
                    className="w-full block text-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 border-blue-600"
                  >
                    Contact Sales
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              Testimonials
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What Our Users Say
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="/api/placeholder/100/100"
                    alt="User"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">
                    Akira Tanaka
                  </h4>
                  <p className="text-gray-600">Individual Investor</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">
                "TradEx's AI analysis has completely transformed how I approach
                the market. I now have access to institutional-grade insights at
                a fraction of the cost."
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="/api/placeholder/100/100"
                    alt="User"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">
                    Yuki Watanabe
                  </h4>
                  <p className="text-gray-600">Portfolio Manager</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">
                "The AI-powered insights have given our firm a significant edge
                in the market. The predictive models have been remarkably
                accurate in forecasting earnings trends."
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="/api/placeholder/100/100"
                    alt="User"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">
                    Hiroshi Nakamura
                  </h4>
                  <p className="text-gray-600">Fintech Developer</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">
                "Integrating TradEx's API into our platform was seamless. Our
                users love the AI-generated insights and it's become our most
                popular feature."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">
              Ready to transform your investment strategy?
            </span>
            <span className="block text-blue-200">
              Join the waitlist today.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Get started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
