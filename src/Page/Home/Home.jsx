import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";

const Home = () => {
  return (
    <section className="bg-base-100 min-h-screen flex items-center justify-center px-6 py-12">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-10 max-w-7xl">
        {/* Right Image Section */}
        <div className="w-full flex justify-center">
          <img
            src="https://i.ibb.co.com/xKhBXvjm/Siam.jpg"
            alt="Profile"
            className="w-72 sm:w-96 md:w-[400px] lg:w-[500px] rounded-2xl shadow-2xl object-cover"
          />
        </div>

        {/* Left Text Section */}
        <div className="w-full text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-primary">
            Understand User Flow &{" "}
            <span className="text-secondary">Increase</span> Conversions
          </h1>

          <p className="py-6 text-base sm:text-lg text-base-content/80 max-w-xl mx-auto lg:mx-0">
            I’m a passionate{" "}
            <span className="font-semibold text-secondary">Web Developer</span>{" "}
            who loves building interactive, scalable, and user-friendly web
            experiences using modern technologies.
          </p>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start gap-6 mt-4">
            <Link
              to="https://github.com/siddikur-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-outline hover:btn-primary transition-transform transform hover:scale-110 text-2xl"
            >
              <FaGithub />
            </Link>

            <Link
              to="https://www.linkedin.com/in/dev-siddikur/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-outline hover:btn-secondary transition-transform transform hover:scale-110 text-2xl"
            >
              <FaLinkedin />
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex justify-center lg:justify-start gap-4">
            <Link to="/projects" className="btn btn-primary">
              View Projects
            </Link>
            <Link to="/about" className="btn btn-outline btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
