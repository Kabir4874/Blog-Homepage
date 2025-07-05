import Industry from "../assets/industry.jpg";
import Tag from "./Tag";
const Header = () => {
  return (
    <div className="pt-40 flex items-stretch">
      {/* left part  */}
      <div className="">
        <div className="w-full">
          <img src={Industry} alt="industry" className="w-full rounded-md" />
        </div>
        <h2>
          Revolutionizing manufacturing emerging trends shaping the industry
        </h2>
        <Tag />
      </div>
      {/* right part  */}
      <div>
        <div>
          <Tag />
          <h5>Adapting business strategies to meet changing demands</h5>
        </div>
      </div>
    </div>
  );
};

export default Header;
