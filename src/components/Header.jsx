import { BsFileBarGraph } from "react-icons/bs";
import { CiGlobe } from "react-icons/ci";
import { GrTechnology } from "react-icons/gr";
import { LiaMosqueSolid } from "react-icons/lia";
import { MdHealing, MdSportsFootball } from "react-icons/md";
import Industry from "../assets/industry.jpg";
import Tag from "./Tag";

const Header = () => {
  return (
    <div className="pt-24 lg:pt-36 px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row lg:items-stretch gap-8 lg:gap-20">
        {/* Left part*/}
        <div className="lg:flex-[100%]">
          <div className="w-full">
            <img
              src={Industry}
              alt="industry"
              className="w-full rounded-md object-cover h-[200px] sm:h-[300px] lg:h-auto"
            />
          </div>
          <h2 className="my-4 text-xl sm:text-2xl lg:text-3xl font-semibold">
            Revolutionizing manufacturing emerging trends shaping the industry
          </h2>
          <Tag
            icon={<CiGlobe size={16} />}
            tag={"World News"}
            bg={"bg-purple-800"}
            date={"JAN 25, 2025"}
          />
        </div>

        {/* Right part  */}
        <div className="lg:flex lg:flex-col lg:justify-between gap-6 lg:gap-0 hidden lg:block">
          <div className="border-b border-t lg:border-t-0 pt-4 lg:pt-0 pb-6 border-gray-400">
            <Tag
              icon={<BsFileBarGraph size={16} />}
              tag={"Business"}
              bg={"bg-yellow-600"}
              date={"JAN 25, 2025"}
            />
            <h5 className="mt-2 text-base sm:text-xl font-bold">
              Adapting business strategies to meet changing demands
            </h5>
          </div>

          <div className="border-b pb-6 border-gray-400 mt-4 lg:mt-0">
            <Tag
              icon={<GrTechnology size={16} />}
              tag={"Technology"}
              bg={"bg-red-500"}
              date={"JAN 25, 2025"}
            />
            <h5 className="mt-2 text-base sm:text-xl font-bold">
              Smart homes revolution how iot is transforming living spaces
            </h5>
          </div>

          <div className="border-b pb-6 border-gray-400 mt-4 lg:mt-0">
            <Tag
              icon={<LiaMosqueSolid size={16} />}
              tag={"Culture"}
              bg={"bg-blue-500"}
              date={"JAN 25, 2025"}
            />
            <h5 className="mt-2 text-base sm:text-xl font-bold">
              The power of art in connecting and expressing culture
            </h5>
          </div>

          <div className="border-b pb-6 border-gray-400 mt-4 lg:mt-0">
            <Tag
              icon={<MdHealing size={16} />}
              tag={"Health News"}
              bg={"bg-green-500"}
              date={"JAN 25, 2025"}
            />
            <h5 className="mt-2 text-base sm:text-xl font-bold">
              How artificial intelligence & machine learning are changing the
              field
            </h5>
          </div>

          <div className="border-b pb-6 border-gray-400 mt-4 lg:mt-0">
            <Tag
              icon={<MdSportsFootball size={16} />}
              tag={"Sports"}
              bg={"bg-red-600"}
              date={"JAN 25, 2025"}
            />
            <h5 className="mt-2 text-base sm:text-xl font-bold">
              The influence of youth sports programs on developing future
              champions
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
