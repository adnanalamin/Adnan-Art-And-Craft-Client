import ContactUs from "../../layout/ContactUs/ContactUs";
import CraftItems from "../../layout/CraftItems/CraftItems";
import Slider from "../../layout/Slider/Slider";
import Subcategory from "../../layout/Subcategory/Subcategory";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <CraftItems></CraftItems>
            <Subcategory></Subcategory>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;