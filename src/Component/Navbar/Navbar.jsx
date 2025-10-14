import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex flex-wrap items-center justify-between p-3 bg-teal-200/20">
      {/* Logo */}
      <img
        src="	https://i.ibb.co.com/xKhBXvjm/Siam.jpg"
        className="h-10 w-10"
        alt="Logo"
      />

      {/* Hamburger Button (Mobile) */}
      <div className="flex md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} id="hamburger">
          <img
            className={`${menuOpen ? "hidden" : "block"}`}
            src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
            width="48"
            height="48"
            alt="Open Menu"
          />
          <img
            className={`${menuOpen ? "block" : "hidden"}`}
            src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
            width="48"
            height="48"
            alt="Close Menu"
          />
        </button>
      </div>

      {/* Menu Links */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } w-full md:w-auto md:flex text-right font-bold mt-5 md:mt-0 border-t-2 border-teal-900 md:border-none`}
      >
        <a
          href="#"
          className="block md:inline-block text-teal-900 hover:text-teal-500 px-3 py-3 border-b-2 border-teal-900 md:border-none"
        >
          Home
        </a>
        <a
          href="#"
          className="block md:inline-block text-teal-900 hover:text-teal-500 px-3 py-3 border-b-2 border-teal-900 md:border-none"
        >
          Products
        </a>
        <a
          href="#"
          className="block md:inline-block text-teal-900 hover:text-teal-500 px-3 py-3 border-b-2 border-teal-900 md:border-none"
        >
          Pricing
        </a>
        <a
          href="#"
          className="block md:inline-block text-teal-900 hover:text-teal-500 px-3 py-3 border-b-2 border-teal-900 md:border-none"
        >
          Contact
        </a>
      </div>

      {/* Create Account Button */}
      <a
        href="#"
        className={`${
          menuOpen ? "block" : "hidden"
        } md:flex w-full md:w-auto px-4 py-2 text-right bg-teal-900 hover:bg-teal-500 text-white md:rounded`}
      >
        Create Account
      </a>
    </nav>
  );
};

export default Navbar;
