import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import background from "../../assets/background.png";

const Root = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="max-w-6xl mx-auto bg-white dark:bg-[#545050]">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
