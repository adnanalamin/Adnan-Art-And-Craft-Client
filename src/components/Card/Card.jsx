import { GiPriceTag } from "react-icons/gi";
import { IoIosStarHalf } from "react-icons/io";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Card = ({ item, onCardDeleted }) => {
  const { _id, photo, productName, price, stock, customaization, rating } =
    item;

  const handelDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://adnan-art-and-craft-server.vercel.app/allartandcraft/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              onCardDeleted(_id);
            }
          });
      }
    });
  };
  return (
    <div className=" w-full">
      <div className="min-h-screen bg-gradient-to-tr  justify-center items-center">
        <div className="md:px-4">
          <div className="max-w-sm bg-white px-6 shadow-xl pt-6 pb-2 rounded-xl  transform hover:scale-105 transition duration-500">
            <div className="relative">
              <img
                className="w-full rounded-xl h-44"
                src={photo}
                alt="Colors"
              />
              <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
                {customaization}
              </p>
              <p className="absolute top-0 right-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-tr-lg rounded-bl-lg">
                {stock}
              </p>
            </div>
            <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
              {productName}
            </h1>
            <div className="my-4">
              <div className="flex space-x-1 items-center">
                <span>
                  <GiPriceTag className="h-6 w-6 text-indigo-600 mb-1.5"></GiPriceTag>
                </span>
                <p>{price}</p>
              </div>
              <div className="flex space-x-1 items-center">
                <span>
                  <IoIosStarHalf className="h-6 w-6 text-indigo-600 mb-1.5"></IoIosStarHalf>
                </span>
                <p>{rating}</p>
              </div>
              <Link to={`/updateitem/${_id}`}>
                <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
                  Update
                </button>
              </Link>
              <button
                onClick={() => handelDelete(_id)}
                className="mt-4 text-xl w-full text-white bg-red-600 py-2 rounded-xl shadow-lg"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
  item: PropTypes.object.isRequired,
  onCardDeleted: PropTypes.func,
};
export default Card;
