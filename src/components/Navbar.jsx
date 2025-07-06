import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className="bg-white p-4 mt-0 lg:mt-4 rounded flex justify-between items-center fixed w-full left-1/2 -translate-x-1/2 max-w-[1440px] shadow-lg shadow-gray-300 z-50">
        <div className="flex items-center gap-4 lg:gap-8">
          <img src={Logo} alt="logo" className="w-8 lg:w-12" />

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-4 uppercase text-sm font-semibold [&>li]:flex [&>li]:items-center [&>li]:gap-4">
            {[
              "business",
              "health news",
              "world news",
              "sports",
              "culture",
              "subscribe",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-200"
                >
                  {item}
                </a>
                <div className="w-1 h-1 bg-secondary rounded-full" />
              </li>
            ))}
            <li>
              <a
                href="#"
                className="hover:text-primary transition-colors duration-200"
              >
                card(0)
              </a>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          {/* Desktop Search */}
          <div className="hidden lg:block relative">
            <input
              type="text"
              placeholder="Search here"
              className="w-[200px] py-2 px-4 rounded-full border-2 border-gray-200 outline-none focus:border-primary transition-all duration-300"
            />
            <IoSearch
              size={18}
              className="absolute top-[50%] -translate-y-1/2 right-2 text-gray-400"
            />
          </div>

          <button
            className="hidden lg:inline bg-primary p-2 rounded-full cursor-pointer hover:bg-primary-dark transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <RiMenuLine size={20} className="text-white" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden bg-primary p-2 rounded-full cursor-pointer hover:bg-primary-dark transition-colors duration-300"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <RiCloseLine size={20} className="text-white" />
            ) : (
              <RiMenuLine size={20} className="text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Content */}
      <div
        className={`lg:hidden fixed top-24 left-0 right-0 bg-white shadow-lg z-50 transition-all duration-300 ease-in-out transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col uppercase text-sm font-semibold divide-y divide-gray-200">
          {[
            "business",
            "health news",
            "world news",
            "sports",
            "culture",
            "subscribe",
            "card(0)",
          ].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="block py-4 px-6 hover:bg-gray-50 hover:text-primary transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Search Input */}
        <div className="p-4 border-t border-gray-200">
          <div className="relative">
            <input
              type="text"
              placeholder="Search here"
              className="w-full py-2 px-4 rounded-full border-2 border-gray-200 outline-none focus:border-primary transition-all duration-300"
            />
            <IoSearch
              size={18}
              className="absolute top-[50%] -translate-y-1/2 right-4 text-gray-400"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
