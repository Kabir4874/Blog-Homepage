import Category from "./components/Category";
import EditorsPick from "./components/EditorsPick";
import Header from "./components/Header";
import LatestNews from "./components/LatestNews";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <div className=" max-w-[1440px] mx-auto">
        <Navbar />
        <Header />
        <Category />
        <EditorsPick />
      </div>
      <LatestNews />
    </div>
  );
};

export default App;
