import { FaArrowRightLong } from "react-icons/fa6";
import Background from "../assets/bg.jpg";

const Advertise = () => {
  return (
    <div className="relative rounded-md overflow-hidden w-full mt-8 lg:mt-24 px-4 lg:px-0">
      {/* Desktop */}
      <div className="hidden lg:block lg:h-[30rem]">
        <img src={Background} alt="ad" className="object-cover w-full h-full" />
        <div className="absolute -bottom-1 w-full h-36 bg-black/20 backdrop-blur-sm flex items-center justify-between p-8 gap-8">
          <div className="w-[75%]">
            <h4 className="text-white text-xl font-semibold mb-4">
              Turning ideas into impactful Ad campaigns
            </h4>
            <p className="text-white text-sm font-light">
              Partner with us to take your brand to the next level. Our platform
              offers prime advertising opportunities designed to connect your
              business with a diverse & engaged audience.
            </p>
          </div>
          <button className="bg-[#f08f64] text-black text-sm px-5 py-2 rounded-full flex items-center gap-2 uppercase font-medium cursor-pointer">
            Advertise with us <FaArrowRightLong />
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden relative aspect-[4/3] rounded-md overflow-hidden">
        <img src={Background} alt="ad" className="object-cover w-full h-full" />
        <div className="absolute bottom-0 w-full min-h-24 bg-black/20 backdrop-blur-sm flex flex-col p-4 gap-2 rounded-b-md">
          <div className="w-full">
            <h4 className="text-white text-lg font-semibold mb-2">
              Turning ideas into impactful Ad campaigns
            </h4>
            <p className="text-white text-xs font-light line-clamp-2">
              Partner with us to take your brand to the next level. Our platform
              offers prime advertising opportunities designed to connect your
              business with a diverse & engaged audience.
            </p>
          </div>
          <button className="bg-[#f08f64] text-black text-xs px-4 py-2 rounded-full flex items-center justify-center gap-2 uppercase font-medium cursor-pointer mt-2 w-full sm:w-auto sm:self-end">
            Advertise with us <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Advertise;
