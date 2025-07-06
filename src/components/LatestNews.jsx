import Article1 from "../assets/article1.png";
import Article2 from "../assets/article2.png";
import Article3 from "../assets/article3.png";
import Article4 from "../assets/article4.png";
import Article5 from "../assets/article5.png";
import Tag from "./Tag";
const LatestNews = () => {
  const newsArticles = [
    {
      category: "Business",
      title: "Adapting business strategies to meet changing demands",
      date: "Feb 10, 2025",
      image: Article3,
    },
    {
      category: "Technology",
      title: "Smart homes revolution how IoT is transforming living spaces",
      date: "Feb 10, 2025",
      image: Article4,
    },
    {
      category: "Culture",
      title: "The power of art in connecting and expressing cultural",
      date: "Jan 27, 2025",
      image: Article5,
    },
  ];

  return (
    <div className="bg-[#f08f64] mt-8 lg:mt-24 px-4 lg:px-0">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between items-center mb-6 pt-16">
          <h2 className="text-2xl font-bold text-black">LATEST NEWS</h2>
          <a
            href="#"
            className="text-black text-sm font-medium hover:underline"
          >
            VIEW ALL &rarr;
          </a>
        </div>

        {/* Grid of news articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* First Column  */}
          <div className="lg:flex-[100%]">
            <div className="w-full mb-2">
              <img
                src={Article1}
                alt="industry"
                className="w-full rounded-md object-cover h-[200px] sm:h-[300px] lg:h-auto"
              />
            </div>
            <Tag
              tag={"Technology"}
              bg={"bg-[##f08f64] !text-black -ml-2"}
              date={"JAN 25, 2025"}
            />
            <h2 className="mb-4 text-xl  font-semibold">
              Future-focused an in-depth look at cutting-edge tech trends
            </h2>
          </div>

          {/* Second Column  */}

          <div className="lg:flex-[100%]">
            <div className="w-full mb-2">
              <img
                src={Article2}
                alt="industry"
                className="w-full rounded-md object-cover h-[200px] sm:h-[300px] lg:h-auto"
              />
            </div>
            <Tag
              tag={"Business"}
              bg={"bg-[##f08f64] !text-black -ml-2"}
              date={"JAN 25, 2025"}
            />
            <h2 className="mb-4 text-xl  font-semibold">
              Understanding the interconnectedness of events shaping our world
              today
            </h2>
          </div>

          {/* Third Column  */}
          <div className="space-y-6 hidden lg:block">
            {newsArticles.map((article, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-center gap-4">
                <img
                  src={article.image}
                  alt={article.category}
                  className="w-54 rounded-md"
                />
                <div>
                  <Tag
                    tag={article.category}
                    bg={"bg-[##f08f64] !text-black -ml-2"}
                    date={"JAN 25, 2025"}
                  />
                  <h5 className="mt-2 font-bold">{article.title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
