import { CiMail } from "react-icons/ci";
import {
  FaFacebookF,
  FaInstagram,
  FaReddit,
  FaRss,
  FaYoutube,
} from "react-icons/fa";
import { FaArrowRightLong, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 py-8 px-4 lg:px-0 mt-8 lg:mt-12">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between gap-12 lg:gap-24">
        <div className="flex-1">
          {/* Newsletter Section */}
          <div className="mb-12">
            <p className="text-lg mb-4">
              Stay updated with the latest news, stories, and insights from
              around the globe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center relative pb-8 border-b border-gray-500">
              <div className="relative w-full sm:w-auto">
                <CiMail
                  size={25}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2"
                />
                <input
                  type="email"
                  placeholder="Enter your e-mail..."
                  className="p-3 pl-12 w-full sm:w-80 bg-black border outline-0 text-white rounded-full placeholder-gray-500"
                />
              </div>
              <button className="bg-[#f08f64] text-black px-6 py-3 rounded-full font-medium w-full sm:w-auto">
                SUBSCRIBE NOW
              </button>
            </div>
          </div>
          {/* Links Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-sm mb-12 w-full">
            {/* Pages */}
            <div>
              <h3 className="font-semibold mb-2">PAGES</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Categories
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    News
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Authors
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Podcast
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Newsletter Plans
                  </a>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="font-semibold mb-2">CATEGORIES</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Business
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Health News
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    World News
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Sports
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Culture
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Technology
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold mb-2">RESOURCES</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Advertise
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Changelog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-col items-start w-full lg:w-[20rem]">
          <div className="flex flex-col gap-4 w-full">
            <div className="flex items-center justify-between border-b pb-4 border-gray-900 hover:border-gray-400 cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-gray-800 rounded-md">
                  <FaFacebookF size={20} />
                </div>
                <p>Facebook</p>
              </div>
              <FaArrowRightLong className="text-gray-400" />
            </div>
            <div className="flex items-center justify-between border-b pb-4 border-gray-900 hover:border-gray-400 cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-gray-800 rounded-md">
                  <FaYoutube size={20} />
                </div>
                <p>Youtube</p>
              </div>
              <FaArrowRightLong className="text-gray-400" />
            </div>
            <div className="flex items-center justify-between border-b pb-4 border-gray-900 hover:border-gray-400 cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-gray-800 rounded-md">
                  <FaInstagram size={20} />
                </div>
                <p>Instagram</p>
              </div>
              <FaArrowRightLong className="text-gray-400" />
            </div>
            <div className="flex items-center justify-between border-b pb-4 border-gray-900 hover:border-gray-400 cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-gray-800 rounded-md">
                  <FaXTwitter size={20} />
                </div>
                <p>Twitter</p>
              </div>
              <FaArrowRightLong className="text-gray-400" />
            </div>
            <div className="flex items-center justify-between border-b pb-4 border-gray-900 hover:border-gray-400 cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-gray-800 rounded-md">
                  <FaReddit size={20} />
                </div>
                <p>Reddit</p>
              </div>
              <FaArrowRightLong className="text-gray-400" />
            </div>
            <div className="flex items-center justify-between border-b pb-4 border-gray-900 hover:border-gray-400 cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-gray-800 rounded-md">
                  <FaRss size={20} />
                </div>
                <p>RSS.com</p>
              </div>
              <FaArrowRightLong className="text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-[1440px] mx-auto mt-8 gap-4 md:gap-0 px-4 lg:px-0">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
          <span className="text-2xl font-bold">KIVZO</span>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            <a href="#" className="text-gray-400 text-xs">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 text-xs">
              Terms & Conditions
            </a>
            <a href="#" className="text-gray-400 text-xs">
              License
            </a>
          </div>
        </div>
        <p className="text-gray-400 text-xs text-center md:text-left">
          &copy; 2025 KIVZO. Designed by{" "}
          <strong className="text-[#f08f64]">Kabir Ahmed</strong>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
