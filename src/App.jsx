import Advertise from "./components/Advertise";
import Category from "./components/Category";
import EditorsPick from "./components/EditorsPick";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LatestNews from "./components/LatestNews";
import Navbar from "./components/Navbar";
import Podcast from "./components/Podcast";
import Team from "./components/Team";
import Technology from "./components/Technology";

const App = () => {
  return (
    <>
      <div className=" max-w-[1440px] mx-auto">
        <Navbar />
        <Header />
        <Category />
        <EditorsPick />
      </div>
      <LatestNews />
      <div className=" max-w-[1440px] mx-auto">
        <Technology />
        <Advertise />
        <Team />
        <Podcast />
      </div>
      <Footer />
    </>
  );
};

export default App;
