import Article1 from "../assets/article1.png";
import Article4 from "../assets/article4.png";
import Article6 from "../assets/article6.png";
import Article7 from "../assets/article7.png";
import Article8 from "../assets/article8.png";
import Tag from "./Tag";

const Technology = () => {
  return (
    <div className="mt-8 lg:mt-12 px-4 lg:px-0">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between items-center mb-6 pt-8 lg:pt-16">
          <h2 className="text-xl lg:text-2xl font-bold text-black uppercase">
            Technology
          </h2>
          <a
            href="#"
            className="text-black text-sm font-medium hover:underline"
          >
            VIEW ALL &rarr;
          </a>
        </div>

        {/* Grid of news articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10">
          {/* First Column */}
          <div className="space-y-4 lg:space-y-6">
            <div className="lg:flex-[100%]">
              <div className="w-full mb-2">
                <img
                  src={Article4}
                  alt="article"
                  className="w-full rounded-md object-cover h-[180px] sm:h-[220px] lg:h-56"
                />
              </div>
              <Tag
                tag={"Technology"}
                bg={"!text-black -ml-2"}
                date={"JAN 25, 2025"}
              />
              <h2 className="mb-2 lg:mb-4 text-base lg:text-lg font-semibold">
                Smart homes revolution how iot is transforming living spaces
              </h2>
            </div>
            <div className="lg:flex-[100%]">
              <div className="w-full mb-2">
                <img
                  src={Article7}
                  alt="article"
                  className="w-full rounded-md object-cover h-[180px] sm:h-[220px] lg:h-56"
                />
              </div>
              <Tag
                tag={"Technology"}
                bg={"!text-black -ml-2"}
                date={"JAN 25, 2025"}
              />
              <h2 className="mb-2 lg:mb-4 text-base lg:text-lg font-semibold">
                Cybersecurity at risk the growing threat of digital breaches
              </h2>
            </div>
          </div>

          {/* Second Column */}
          <div className="space-y-4 lg:space-y-6">
            <div className="lg:flex-[100%]">
              <div className="w-full mb-2">
                <img
                  src={Article6}
                  alt="article"
                  className="w-full rounded-md object-cover h-[180px] sm:h-[220px] lg:h-56"
                />
              </div>
              <Tag
                tag={"Technology"}
                bg={"!text-black -ml-2"}
                date={"JAN 25, 2025"}
              />
              <h2 className="mb-2 lg:mb-4 text-base lg:text-lg font-semibold">
                The future of 5G connecting a world at lighting speed
              </h2>
            </div>
            <div className="lg:flex-[100%]">
              <div className="w-full mb-2">
                <img
                  src={Article8}
                  alt="article"
                  className="w-full rounded-md object-cover h-[180px] sm:h-[220px] lg:h-56"
                />
              </div>
              <Tag
                tag={"Technology"}
                bg={"!text-black -ml-2"}
                date={"JAN 25, 2025"}
              />
              <h2 className="mb-2 lg:mb-4 text-base lg:text-lg font-semibold">
                Transforming entertainment, education & beyond
              </h2>
            </div>
          </div>

          {/* Third Column - Featured Article */}
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-full rounded-md md:col-span-2 lg:col-span-2 mt-4 md:mt-0">
            <img
              src={Article1}
              alt="Article"
              className="w-full h-full object-cover rounded-md"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-4 lg:p-6">
              <p className="text-sm text-white mt-2">Jan 25, 2025</p>
              <h3 className="text-xl lg:text-2xl font-semibold text-white">
                Future-focused an in-depth look at cutting-edge tech trends
              </h3>
            </div>
            <p className="bg-[#f08f64] text-black text-xs lg:text-sm px-3 py-1 rounded-full inline absolute top-4 lg:top-8 left-4 lg:left-8">
              KRISTIN WATSON
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
