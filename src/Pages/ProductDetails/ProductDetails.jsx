import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/allartandcraft/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [id]);

  return (
    <div>
      <div className="font-inter">
        <div className="p-6 lg:max-w-7xl max-w-2xl max-lg:mx-auto">
          <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 bg-gray-100 w-full lg:sticky top-0 text-center p-8">
              <img
                src={item.photo}
                alt="Product"
                className="w-4/5 rounded object-cover"
              />
            </div>
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-extrabold text-gray-800">
                {item.productName}
              </h2>
              <div className="flex flex-wrap gap-4 mt-4">
                <p className="text-gray-800 text-xl font-bold">
                  Price : {item.price}
                </p>
              </div>
              <div className=" space-y-2 mt-4">
                <p className="text-gray-800 text-base font-bold">
                  Rating : {item.rating}
                </p>
                <h3 className="text-gray-800 text-base font-bold">
                  Stock : {item.stock}
                </h3>
                <p className="text-gray-800 text-base font-bold">
                  Customaization : {item.customaization}
                </p>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-800">
                  Category Name : {item.subcategory_Name}
                </h3>
                <p className="text-xs mt-4">{item.descriptions}</p>
              </div>
              <div className="mt-8 max-w-md">
                <div className="flex items-start mt-8">
                  <div className="ml-3">
                    <h4 className="text-sm font-bold">
                      Author : {item.userName}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
