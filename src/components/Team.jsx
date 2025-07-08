import { FaArrowRightLong } from "react-icons/fa6";
import Avatar1 from "../assets/avatar1.webp";
import Avatar2 from "../assets/avatar2.jpg";
import Avatar3 from "../assets/avatar3.avif";

const Team = () => {
  return (
    <div className="mt-8 lg:mt-12 px-4 lg:px-0">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 lg:mb-6 pt-6 lg:pt-16 gap-4 sm:gap-0">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-black uppercase">
            our editorial team
          </h2>
          <div className="text-black text-sm font-medium flex items-center gap-2 group cursor-pointer">
            <p>VIEW ALL</p>
            <FaArrowRightLong className="relative right-0 group-hover:right-[-8px] transition-all duration-300 ease-in-out" />
          </div>
        </div>

        {/* Grid of team members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10">
          {/* Team Member 1 */}
          <div className="relative rounded-md overflow-hidden h-[18rem] sm:h-[22rem] md:h-[25rem]">
            <img
              src={Avatar1}
              alt="avatar"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 w-full h-12 bg-black/20 backdrop-blur-sm flex items-center justify-between px-4">
              <h3 className="text-white text-sm sm:text-md font-semibold truncate max-w-[50%]">
                Marvin McKinney
              </h3>
              <p className="text-white text-xs sm:text-sm truncate max-w-[40%]">
                Senior Reporter
              </p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="relative rounded-md overflow-hidden h-[18rem] sm:h-[22rem] md:h-[25rem]">
            <img
              src={Avatar2}
              alt="avatar"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 w-full h-12 bg-black/20 backdrop-blur-sm flex items-center justify-between px-4">
              <h3 className="text-white text-sm sm:text-md font-semibold truncate max-w-[50%]">
                Theresa Webb
              </h3>
              <p className="text-white text-xs sm:text-sm truncate max-w-[40%]">
                Publisher
              </p>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="relative rounded-md overflow-hidden h-[18rem] sm:h-[22rem] md:h-[25rem]">
            <img
              src={Avatar3}
              alt="avatar"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 w-full h-12 bg-black/20 backdrop-blur-sm flex items-center justify-between px-4">
              <h3 className="text-white text-sm sm:text-md font-semibold truncate max-w-[50%]">
                Esther Howards
              </h3>
              <p className="text-white text-xs sm:text-sm truncate max-w-[40%]">
                Content Writer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
