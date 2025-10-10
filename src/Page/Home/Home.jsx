import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <section className="bg-white lg:grid lg:min-h-screen lg:place-content-center dark:bg-gray-900">
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32">
        {/* Text Content */}
        <div className="max-w-prose text-left">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
            Understand user flow and{" "}
            <strong className="text-indigo-600">increase</strong> conversions
          </h1>

          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
            A Passionate{" "}
            <span className="font-semibold text-blue-500">Web Developer</span>{" "}
            who loves crafting interactive and modern web experiences.
          </p>

             {/* Social Links */}
      <div className="mt-6 flex gap-6">
        <a
          href="https://github.com/siddikur-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 text-3xl transition-transform transform hover:scale-110"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/dev-siddikur/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 text-3xl transition-transform transform hover:scale-110"
        >
          <FaLinkedin />
        </a>
      </div>
        </div>

        {/* Responsive Image */}
        <div className="mt-6 md:mt-0 sm:p-10">
          <img
            className="w-full h-auto max-w-full rounded-lg object-cover md:h-[400px] lg:h-[500px]"
            src="https://i.ibb.co.com/xKhBXvjm/Siam.jpg"
            alt="Profile or related visual"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
