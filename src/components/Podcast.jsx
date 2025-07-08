import { FaArrowRightLong } from "react-icons/fa6";
import Podcast1 from "../assets/podcast1.webp";
import Podcast2 from "../assets/podcast2.jpg";
import Podcast3 from "../assets/podcast3.webp";

const Podcast = () => {
  return (
    <div className="mt-8 lg:mt-12 px-4 lg:px-0">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between items-center mb-6 pt-8 lg:pt-16">
          <h2 className="text-xl lg:text-2xl font-bold text-black uppercase">
            Podcast
          </h2>
          <div className="text-black text-sm font-medium flex items-center gap-2 group cursor-pointer">
            <p>VIEW ALL</p>
            <FaArrowRightLong className="relative right-0 group-hover:right-[-8px] transition-all duration-300 ease-in-out" />
          </div>
        </div>

        {/* Grid of podcast items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 lg:gap-8">
          {/* First Column */}
          <div className="relative w-full h-full rounded-md mt-4 col-span-4 md:mt-0 flex flex-col">
            <div className="relative flex-1">
              <img
                src={Podcast1}
                alt="podcast"
                className="w-full h-full object-cover rounded-md"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 rounded-b-md"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-4 lg:p-6">
                <p className="text-sm text-white mb-2 uppercase">
                  marvin mckinney
                </p>
                <h3 className="text-md lg:text-xl font-semibold text-white">
                  Conversations beyond borders insights, ideas and inspiring
                  journeys
                </h3>
              </div>
              <p className="bg-[#f08f64] text-black text-xs lg:text-sm px-3 py-1 rounded-full inline absolute top-4 lg:top-8 left-4 lg:left-8">
                10 MINUTE
              </p>
            </div>
          </div>

          {/* Second Column (Contains two podcast items) */}
          <div className="col-span-2 flex flex-col  lg:gap-4 w-full mt-4 md:mt-0">
            {/* First Item in Second Column */}
            <div className="relative w-full h-full rounded-md mt-4 md:mt-0">
              <img
                src={Podcast2}
                alt="podcast"
                className="w-full h-full object-cover rounded-md"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 rounded-b-md"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-4 lg:p-6">
                <p className="text-xs text-white mb-2 uppercase">guy hawkins</p>
                <h3 className="text-md lg:text-xl font-semibold text-white">
                  Beyond the mic transformative ideas, powerful voices, endless
                  inspiration
                </h3>
              </div>
            </div>
            {/* Second Item in Second Column */}
            <div className="relative w-full h-full rounded-md mt-4">
              <img
                src={Podcast3}
                alt="podcast"
                className="w-full h-full object-cover rounded-md"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 rounded-b-md"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-4 lg:p-6">
                <p className="text-xs text-white mb-2 uppercase">
                  kristin watson
                </p>
                <h3 className="text-md lg:text-xl font-medium text-white">
                  The change makers inspiring stories of transforming and
                  resilience
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Podcast;
