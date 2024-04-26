const AddItems = () => {
  return (
    <div>
      <div className="bg-white  border-4 rounded-lg shadow relative m-10">
        <div className="flex items-start justify-between p-5 border-b rounded-t">
          <h3 className="text-xl font-semibold">Add Craft Item</h3>
        </div>

        <div className="p-6 space-y-6">
          <form>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium font-inter text-gray-900 block mb-2">
                  Item Name
                </label>
                <input
                  type="text"
                  name="product-name"
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
                <select className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5">
                  <option value="" disabled selected>
                    Textile Arts
                  </option>
                  <option>Embroidery</option>
                  <option>Knitting & Crocheting</option>
                  <option>Quilting</option>
                  <option>Beadwork</option>
                  <option>Tie-Dyeing</option>
                  <option>Macrame</option>
                </select>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Rating
                </label>
                <input
                  type="text"
                  name="brand"
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
                <select className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5">
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
                <select className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5">
                  <option value="" disabled selected>
                    Stock Status
                  </option>
                  <option>In stock</option>
                  <option>Made to Order</option>
                </select>
              </div>
              <div className="col-span-full">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Description
                </label>
                <textarea
                  id="product-details"
                  rows="6"
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
