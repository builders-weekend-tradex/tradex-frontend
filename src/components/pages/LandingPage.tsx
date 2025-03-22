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
import { useTranslation } from "react-i18next";
import image1 from "../../assets/image1.jpeg";

const LandingPage: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");

  const notify = () =>
    toast(`Thank you for joining our waitlist with email: ${email}`);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    notify();
    setEmail("");
  };

  return (
    <div className="min-h-screen text-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={image1}
            alt="Trading dashboard"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50 "></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto flex items-center justify-start min-h-screen">
          <main className="px-4 sm:px-6 lg:px-8">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">
                  {t("landing_page.hero.title_black")}
                </span>
                <span className="block text-blue-300">
                  {t("landing_page.hero.title_blue")}
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0">
                {t("landing_page.hero.subtitle")}
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <form onSubmit={handleSubmit} className="sm:flex">
                  <input
                    type="email"
                    required
                    placeholder={t("landing_page.hero.placeholder")}
                    className="w-full bg-gray-100 px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 sm:max-w-xs rounded-md"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <button
                      type="submit"
                      className="w-full lg:w-48 flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-3 md:text-lg md:px-6 "
                    >
                      {t("landing_page.hero.join")}
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

      {/* Feature Section */}
      <div id="features" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              {t("landing_page.feature_section.title")}
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {t("landing_page.feature_section.subtitle")}
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
              {t("landing_page.feature_section.subheading")}
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  <BarChart2 className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900">
                  {t("landing_page.feature_section.feature_1.title")}
                </h3>
                <p className="mt-2 text-base text-gray-600 text-center">
                  {t("landing_page.feature_section.feature_1.description")}
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900">
                  {t("landing_page.feature_section.feature_2.title")}
                </h3>
                <p className="mt-2 text-base text-gray-600 text-center">
                  {t("landing_page.feature_section.feature_2.description")}
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  <Cpu className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900">
                  {t("landing_page.feature_section.feature_3.title")}
                </h3>
                <p className="mt-2 text-base text-gray-600 text-center">
                  {t("landing_page.feature_section.feature_3.description")}
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900">
                  {t("landing_page.feature_section.feature_4.title")}
                </h3>
                <p className="mt-2 text-base text-gray-600 text-center">
                  {t("landing_page.feature_section.feature_4.description")}
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900">
                  {t("landing_page.feature_section.feature_5.title")}
                </h3>
                <p className="mt-2 text-base text-gray-600 text-center">
                  {t("landing_page.feature_section.feature_5.description")}
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  <DollarSign className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900">
                  {t("landing_page.feature_section.feature_6.title")}
                </h3>
                <p className="mt-2 text-base text-gray-600 text-center">
                  {t("landing_page.feature_section.feature_6.description")}
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
              {t("landing_page.pricing_section.title")}
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {t("landing_page.pricing_section.subtitle")}
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
              {t("landing_page.pricing_section.subheading")}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
            {/* Free Plan */}
            <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200 flex flex-col h-full ">
              <div className="px-6 py-8">
                <h3 className="text-2xl font-bold text-gray-900">
                  {t("landing_page.pricing_section.free_plan.title")}
                </h3>
                <p className="mt-4 text-gray-600">
                  {t("landing_page.pricing_section.free_plan.description")}
                </p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">
                    {t("landing_page.pricing_section.free_plan.price")}
                  </span>
                  <span className="text-base font-medium text-gray-500">
                    {t("landing_page.pricing_section.free_plan.price_suffix")}
                  </span>
                </p>
              </div>
              <div className="px-6 py-8 flex flex-col flex-grow">
                <ul className="space-y-4 mb-10">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <Star className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-base text-gray-700 flex-1 text-left">
                      {t("landing_page.pricing_section.free_plan.li_1")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <Star className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-base text-gray-700 flex-1 text-left">
                      {t("landing_page.pricing_section.free_plan.li_2")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <Star className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-base text-gray-700 flex-1 text-left">
                      {t("landing_page.pricing_section.free_plan.li_3")}
                    </p>
                  </li>
                </ul>
                <div className="mt-auto">
                  <a
                    href="#"
                    className="w-full self-end block text-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 border-blue-600"
                  >
                    {t("landing_page.pricing_section.free_plan.cta")}
                  </a>
                </div>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200 flex flex-col h-full">
              <div className="px-6 py-8">
                <h3 className="text-2xl font-bold text-gray-900">
                  {t("landing_page.pricing_section.premium_plan.title")}
                </h3>
                <p className="mt-4 text-gray-600">
                  {t("landing_page.pricing_section.premium_plan.description")}
                </p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">
                    {t("landing_page.pricing_section.premium_plan.price")}
                  </span>
                  <span className="text-base font-medium text-gray-500">
                    {t(
                      "landing_page.pricing_section.premium_plan.price_suffix"
                    )}
                  </span>
                </p>
              </div>
              <div className="px-6 py-8 flex flex-col flex-grow">
                <ul className="space-y-4 mb-10">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <Star className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-base text-gray-700 flex-1 text-left">
                      {t("landing_page.pricing_section.premium_plan.li_1")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <Star className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-base text-gray-700 flex-1 text-left">
                      {t("landing_page.pricing_section.premium_plan.li_2")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <Star className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-base text-gray-700 flex-1 text-left">
                      {t("landing_page.pricing_section.premium_plan.li_3")}
                    </p>
                  </li>
                </ul>
                <div className="mt-auto">
                  <a
                    href="#"
                    className="w-full block text-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    {t("landing_page.pricing_section.premium_plan.cta")}
                  </a>
                </div>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="bg-white overflow-hidden shadow-lg border-2 border-blue-500 rounded-lg divide-y divide-gray-200 flex flex-col h-full">
              <div className="px-6 py-8 relative">
                <span className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
                  {t("landing_page.pricing_section.pro_plan.popular")}
                </span>
                <h3 className="text-2xl font-bold text-gray-900">
                  {t("landing_page.pricing_section.pro_plan.title")}
                </h3>
                <p className="mt-4 text-gray-600">
                  {t("landing_page.pricing_section.pro_plan.description")}
                </p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">
                    {t("landing_page.pricing_section.pro_plan.price")}
                  </span>
                  <span className="text-base font-medium text-gray-500">
                    {t("landing_page.pricing_section.pro_plan.price_suffix")}
                  </span>
                </p>
              </div>
              <div className="px-6 py-8 flex flex-col flex-grow">
                <ul className="space-y-4 mb-10">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <Star className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-base text-gray-700 flex-1 text-left">
                      {t("landing_page.pricing_section.pro_plan.li_1")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <Star className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-base text-gray-700 flex-1 text-left">
                      {t("landing_page.pricing_section.pro_plan.li_2")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <Star className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-base text-gray-700 flex-1 text-left">
                      {t("landing_page.pricing_section.pro_plan.li_3")}
                    </p>
                  </li>
                </ul>
                <div className="mt-auto">
                  <a
                    href="#"
                    className="w-full block text-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    {t("landing_page.pricing_section.pro_plan.cta")}
                  </a>
                </div>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200 flex flex-col h-full">
              <div className="px-6 py-8">
                <h3 className="text-2xl font-bold text-gray-900">
                  {t("landing_page.pricing_section.enterprise_plan.title")}
                </h3>
                <p className="mt-4 text-gray-600">
                  {t(
                    "landing_page.pricing_section.enterprise_plan.description"
                  )}
                </p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">
                    {t("landing_page.pricing_section.enterprise_plan.price")}
                  </span>
                </p>
              </div>
              <div className="px-6 py-8 flex flex-col flex-grow">
                <ul className="space-y-4 mb-10">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <Star className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-base text-gray-700 flex-1 text-left">
                      {t("landing_page.pricing_section.enterprise_plan.li_1")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <Star className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-base text-gray-700 flex-1 text-left">
                      {t("landing_page.pricing_section.enterprise_plan.li_2")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <Star className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-base text-gray-700 flex-1 text-left">
                      {t("landing_page.pricing_section.enterprise_plan.li_3")}
                    </p>
                  </li>
                </ul>
                <div className="mt-auto">
                  <a
                    href="#"
                    className="w-full block text-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 border-blue-600"
                  >
                    {t("landing_page.pricing_section.enterprise_plan.cta")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          {/* <div className="lg:flex lg:items-center lg:space-x-6"> */}
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">
                {t("landing_page.cta_section.title")}
              </span>
              <span className="block text-blue-200">
                {t("landing_page.cta_section.subtitle")}
              </span>
            </h2>
          </div>
          <div className="mt-8 text-center">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
            >
              {t("landing_page.cta_section.cta")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
