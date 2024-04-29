import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const CategoryCard = ({ item }) => {
  const { image, subcategory_Name } = item;
  return (
    <div>
      <Link to={`/categorypage/${subcategory_Name}`}>
        <div className="block  rounded-lg border shadow-lg dark:bg-gray-800 dark:border-gray-700 bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img className="rounded-t-lg h-44 w-full" src={image} alt="" />
          </div>
          <div className="p-6">
            <p className="text-xl font-poppins font-bold dark:text-white">
              {subcategory_Name}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
CategoryCard.propTypes = {
  item: PropTypes.object.isRequired,
};
export default CategoryCard;
