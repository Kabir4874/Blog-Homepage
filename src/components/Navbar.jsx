import { IoSearch } from "react-icons/io5";
import { RiMenuLine } from "react-icons/ri";
import Logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <nav className="bg-white p-4 mt-4 rounded flex justify-between items-center fixed w-[1440px] shadow-lg shadow-gray-300 ">
      <div className="flex items-center gap-8">
        <img src={Logo} alt="logo" className="w-12" />

        <ul className="flex items-center gap-4 uppercase text-sm font-semibold [&>li]:flex [&>li]:items-center [&>li]:gap-4">
          <li>
            <a href="#">business</a>
            <div className="w-1 h-1 bg-secondary rounded-full"></div>
          </li>
          <li>
            <a href="#">health news</a>
            <div className="w-1 h-1 bg-secondary rounded-full"></div>
          </li>
          <li>
            <a href="#">world news</a>
            <div className="w-1 h-1 bg-secondary rounded-full"></div>
          </li>
          <li>
            <a href="#">sports</a>
            <div className="w-1 h-1 bg-secondary rounded-full"></div>
          </li>
          <li>
            <a href="#">culture</a>
            <div className="w-1 h-1 bg-secondary rounded-full"></div>
          </li>
          <li>
            <a href="#">subscribe</a>
            <div className="w-1 h-1 bg-secondary rounded-full"></div>
          </li>
          <li>
            <a href="#">card(0)</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <div className=" relative">
          <input
            type="text"
            placeholder="Search here"
            className="max-w-[300px] py-2 px-4 rounded-full border-2 border-[rgba(var(--color-secondary))] outline-none"
          />
          <IoSearch
            size={20}
            className=" absolute top-[50%] -translate-[50%] right-2"
          />
        </div>
        <div className="bg-primary p-2 rounded-full cursor-pointer">
          <RiMenuLine size={20} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
