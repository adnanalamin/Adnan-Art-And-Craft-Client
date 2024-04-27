import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddItems = () => {
    const [catagory, setCatagory] = useState()
    const [customaization, setCustomaization] = useState()
    const [stock, setStock] = useState()

    const { user} = useContext(AuthContext);
    const handelCatagoryChange = e => {
        setCatagory(e.target.value)
    }
    const handelStockChange = e => {
        setStock(e.target.value)
    }
    const handelCustomaizationChange = e => {
        setCustomaization(e.target.value)
    }
    const handelAddCraft = e => {
        e.preventDefault()
        const form = e.target;
        const productName = form.productName.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const descriptions = form.descriptions.value;
        const photo = form.photo.value;
        const  processingTime =  new Date()
        const userName = user.displayName
        const userEmail = user.email
        const items = {productName,catagory,rating, price, customaization, stock, descriptions, photo, processingTime, userName, userEmail}
        console.log(items)

        fetch('http://localhost:5000/artandcraft',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(items)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: "success",
                    text: "Item add successfully",
                    icon: "success"
                  });
            }
        })
       
    }
  return (
    <div>
      <div className="bg-white  border-4 rounded-lg shadow relative m-10">
        <div className="flex items-start justify-between p-5 border-b rounded-t">
          <h3 className="text-xl font-semibold">Add Craft Item</h3>
        </div>

        <div className="p-6 space-y-6">
          <form onSubmit={handelAddCraft}>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium font-inter text-gray-900 block mb-2">
                  Item Name
                </label>
                <input
                  type="text"
                  name="productName"
                  id="product-name"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="Items Name"
                  required=""
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Category
                </label>
                <select value={catagory} onChange={handelCatagoryChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5">
                  <option value="" disabled selected>
                    Textile Arts
                  </option>
                  <option value="Embroidery">Embroidery</option>
                  <option value="Knitting & Crocheting">Knitting & Crocheting</option>
                  <option value="Quilting">Quilting</option>
                  <option value="Beadwork">Beadwork</option>
                  <option value="Tie-Dyeing">Tie-Dyeing</option>
                  <option value="Macrame">Macrame</option>
                </select>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Rating
                </label>
                <input
                  type="text"
                  name="rating"
                  id="brand"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="4.6"
                  required=""
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="2300"
                  required=""
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Customization
                </label>
                <select  value={customaization} onChange={handelCustomaizationChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5">
                  <option value="" disabled selected>
                    Customization
                  </option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Stock Status
                </label>
                <select onChange={handelStockChange} value={stock} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5">
                  <option value="" disabled selected>
                    Stock Status
                  </option>
                  <option value="In stock">In stock</option>
                  <option value="Made to Order">Made to Order</option>
                </select>
              </div>
              <div className="col-span-full">
                <label className="text-sm font-medium font-inter text-gray-900 block mb-2">
                  Img URL
                </label>
                <input
                  type="text"
                  name="photo"
                  id="product-name"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="Items Name"
                  required=""
                />
              </div>
              <div className="col-span-full">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Description
                </label>
                <textarea
                  id="product-details"
                  rows="6"
                  name="descriptions"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                  placeholder="description"
                ></textarea>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 rounded-b">
              <button
                className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                type="submit"
              >
                Add Item
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItems;
