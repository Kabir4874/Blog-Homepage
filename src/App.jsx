import Header from "./components/Header";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <div className=" max-w-[1440px] mx-auto">
        <Navbar />
        <Header />
      </div>
    </div>
  );
};

export default App;
