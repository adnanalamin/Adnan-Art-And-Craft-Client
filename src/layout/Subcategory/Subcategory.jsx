import { useEffect, useState } from "react";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import { Fade, Slide } from "react-awesome-reveal";

const Subcategory = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("https://adnan-art-and-craft-server.vercel.app/subcategoryProduct")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategory(data);
      });
  }, []);
  return (
    <div className="lg:mx-12  mx-auto mt-16">
      <h1 className="text-center font-poppins font-bold text-4xl dark:text-white">
        {" "}
        <Slide>Art & Craft Categories</Slide>
      </h1>
      <div className="mt-6">
        <p className="md:w-3/5 mx-auto text-center font-inter text-base dark:text-white">
          {" "}
          <Fade>
            This category involves creating images or designs on a surface using
            various tools such as pencils, pens, charcoal, or pastels. Drawing
            can range from simple sketches to intricate illustrations
          </Fade>
        </p>
      </div>

      <div className="md:grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-12">
        {category.map((item) => (
          <CategoryCard key={item._id} item={item}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Subcategory;
