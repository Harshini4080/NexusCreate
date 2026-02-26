import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-4 sm:px-20 xl:px-32 overflow-hidden">

      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-green-300 rounded-full blur-[150px] opacity-50"></div>
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-emerald-400 rounded-full blur-[150px] opacity-50"></div>
        <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] bg-lime-200 rounded-full blur-[120px] opacity-40"></div>
      </div>

      {/* Hero Content */}
      <div className="text-center mb-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold leading-[1.2]">
          Create amazing content <br />
          with <span className="text-primary">AI tools</span>
        </h1>

        <p className="mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl mx-auto text-gray-600 max-sm:text-xs">
          Transform your content creation with our suite of premium AI tools.
          Write articles, generate images, and enhance your workflow.
        </p>
      </div>

      {/* Call To Action */}
      <div className="flex justify-center gap-4 text-sm max-sm:text-xs">
        <button
          onClick={() => navigate("/ai")}
          className="bg-primary text-white px-10 py-3 rounded-lg 
                     hover:scale-105 active:scale-95 transition duration-200"
        >
          Start creating now
        </button>
      </div>

      {/* Social Proof */}
      <div className="flex items-center gap-4 mt-8 mx-auto text-gray-600">
        <img src={assets.user_group} alt="User group" className="h-8" />
        Trusted by 10k+ people
      </div>

    </section>
  );
};

export default Hero;