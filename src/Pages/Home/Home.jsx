import ContactUs from "../../layout/ContactUs/ContactUs";
import CraftItems from "../../layout/CraftItems/CraftItems";
import HappyClient from "../../layout/HappyClient/HappyClient";
import Slider from "../../layout/Slider/Slider";
import Subcategory from "../../layout/Subcategory/Subcategory";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <CraftItems></CraftItems>
            <Subcategory></Subcategory>
            <ContactUs></ContactUs>
            <HappyClient></HappyClient>
        </div>
    );
};

export default Home;