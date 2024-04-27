import PropTypes from "prop-types";
const CategoryCard = ({item}) => {
    const {image, subcategory_Name} = item
  return (
    <div>
      <div className="block  rounded-lg border shadow-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
        <div className="relative overflow-hidden bg-cover bg-no-repeat">
          <img
            className="rounded-t-lg h-44 w-full"
            src={image}
            alt=""
          />
        </div>
        <div className="p-6">
          <p className="text-xl font-poppins font-bold">
            {subcategory_Name}
          </p>
        </div>
      </div>
    </div>
  );
};
CategoryCard.propTypes = {
    item: PropTypes.object.isRequired,
  };
export default CategoryCard;
