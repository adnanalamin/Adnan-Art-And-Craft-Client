import Card from "../../components/Card/Card";
import { FaAnglesDown } from "react-icons/fa6";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyArtAndCraft = () => {
  const { user } = useContext(AuthContext);
  const [myItems, setMyItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/artandcraft/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyItems(data);
      });
  }, [user]);

  const handleCardDeleted = (_id) => {
    console.log(_id);
    const updatedItems = myItems.filter((item) => item._id !== _id);
    setMyItems(updatedItems);
  };

  const handelCustomizationFilter = (filter) => {
    if (filter === "all") {
      fetch(`http://localhost:5000/artandcraft/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setMyItems(data);
        });
      // setMyItems(myItems);
    } else if (filter === "Yes") {
      fetch(`http://localhost:5000/artandcraft/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          const yescustomaization = data.filter(
            (item) => item.customaization == filter
          );
          setMyItems(yescustomaization);
        });
    } else if (filter === "No") {
      fetch(`http://localhost:5000/artandcraft/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          const nocustomaization = data.filter(
            (item) => item.customaization == filter
          );
          setMyItems(nocustomaization);
        });
    }
  };
  return (
    <div className="mt-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-poppins font-bold">My Art & Craft List</h1>
        <h3 className="md:w-3/5 md:mx-auto font-inter text-base mt-8 text-[#7F7D7D]">
          I would be happy to help! Could you provide a bit more detail about
          what specific types of art and craft items are on your list? For
          example, are you interested in painting, drawing, knitting, pottery,
          or any other specific crafts? The more information you provide, the
          better I can tailor my descriptions to your interests.
        </h3>
        <div>
          <div className="mx-auto flex  w-full items-center justify-center  py-2">
            <div className="group relative cursor-pointer py-2">
              <div className="flex items-center justify-between space-x-5 bg-white px-4">
                <a
                  className="menu-hover my-2 py-2 text-base font-medium text-black lg:mx-4"
                  onClick=""
                >
                  Customization
                </a>
                <span>
                  <FaAnglesDown className="h-6 w-6"></FaAnglesDown>
                </span>
              </div>

              <div className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
                <a
                  onClick={() => handelCustomizationFilter("all")}
                  className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                >
                  All
                </a>
                <a
                  onClick={() => handelCustomizationFilter("Yes")}
                  className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                >
                  Yes
                </a>

                <a
                  onClick={() => handelCustomizationFilter("No")}
                  className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                >
                  No
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-5 md:gap-3 gap-2 space-y-4 md:space-y-0 md:mx-8">
        {myItems.map((item) => (
          <Card
            key={item._id}
            item={item}
            onCardDeleted={handleCardDeleted}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default MyArtAndCraft;
