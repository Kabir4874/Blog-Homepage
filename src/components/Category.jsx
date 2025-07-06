import Business from "../assets/business.jpg";
import Culture from "../assets/culture.jpeg";
import Health from "../assets/health.webp";
import Sports from "../assets/sports.jpg";
import World from "../assets/world.avif";

const Category = () => {
  const categories = [
    { name: "Business", image: Business },
    { name: "Culture", image: Culture },
    { name: "Health News", image: Health },
    { name: "Sports", image: Sports },
    { name: "World News", image: World },
  ];

  return (
    <div className="mt-8 lg:mt-24 px-4 lg:px-0">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`relative rounded-md overflow-hidden aspect-[4/3] bg-cover bg-center`}
          >
            <img
              src={category.image}
              alt="category"
              className="w-full h-full"
            />
            <div className="absolute bottom-0 w-full h-12 bg-black/20 backdrop-blur-md flex items-center">
              <h3 className="text-white text-sm font-medium px-4 uppercase">
                {category.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
