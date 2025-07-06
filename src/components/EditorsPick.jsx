import Editor from "../assets/edior.png";

const EditorsPick = () => {
  return (
    <div className="flex flex-col lg:flex-row items-stretch justify-between gap-4 mt-8 lg:mt-24 px-4 lg:px-0">
      <div className="lg:w-1/3 bg-white rounded-lg p-8 flex flex-col justify-between">
        <div>
          <h2 className="mb-1 text-sm">Stories That Matter</h2>
          <h3 className="text-xl font-semibold mb-6">EDITOR'S PICK</h3>
        </div>
        <ul className="space-y-8">
          {[
            {
              category: "Culture",
              title: "The power of art in connecting and expressing cultural",
            },
            {
              category: "Health News",
              title:
                "How artificial intelligence & machine learning are changing the field",
            },
            {
              category: "Sports",
              title:
                "The influence of youth sports programs on developing future champions",
            },
          ].map((item, index) => (
            <li key={index} className="border-t pt-4 border-t-gray-200">
              <p className="text-xs uppercase mb-1">{item.category}</p>
              <p className="font-semibold text-base">{item.title}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:w-2/3">
        <div className="relative w-full h-48 sm:h-56 lg:h-[30rem] rounded-lg overflow-hidden shadow-lg">
          <img
            src={Editor}
            alt="Editor Pick"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default EditorsPick;
