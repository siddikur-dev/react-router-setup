import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content px-6 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Grid layout */}
        <div className="footer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-3">MyBrand</h2>
            <p className="text-base-content/70">
              Crafting modern, responsive, and user-friendly web experiences
              with Link focus on clean design and great UX.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <span className="footer-title">Quick Links</span>
            <Link href="#home" className="link link-hover">
              Home
            </Link>
            <Link href="#about" className="link link-hover">
              About
            </Link>
            <Link href="#items" className="link link-hover">
              Items
            </Link>
            <Link href="#contact" className="link link-hover">
              Contact
            </Link>
          </div>

          {/* Resources */}
          <div>
            <span className="footer-title">Resources</span>
            <Link href="#projects" className="link link-hover">
              Projects
            </Link>
            <Link href="#blog" className="link link-hover">
              Blog
            </Link>
            <Link href="#services" className="link link-hover">
              Services
            </Link>
          </div>

          {/* Social Links */}
          <div>
            <span className="footer-title">Follow Me</span>
            <div className="flex space-x-5 mt-3">
              <Link
                href="https://github.com/siddikur-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-outline hover:btn-primary transition-transform transform hover:scale-110 text-xl"
              >
                <FaGithub />
              </Link>

              <Link
                href="https://www.linkedin.com/in/dev-siddikur/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-outline hover:btn-secondary transition-transform transform hover:scale-110 text-xl"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider my-6"></div>

        {/* Bottom Copyright */}
        <div className="text-center text-sm text-base-content/70">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-primary">Siddikur Rahman</span> —
          All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
