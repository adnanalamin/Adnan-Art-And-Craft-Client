import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import { CiLogin } from "react-icons/ci";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { IoMoon, IoSunny } from "react-icons/io5";

const Navbar = () => {
  const { user, userLogout } = useContext(AuthContext);
  const [isHovered, setIsHovered] = useState(false);

  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  const handelSignout = () => {
    userLogout().then(() => {
      Swal.fire({
        title: "Good job!",
        text: "Logout Successfully",
        icon: "success",
      }).catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
    });
  };
  const navItems = (
    <>
      <li id="nav" className="font-poppins text-base">
        <NavLink to="/">Home</NavLink>
      </li>
      <li id="nav" className="font-poppins text-base">
        <NavLink to="/allartandcraft">All Art & craft Items</NavLink>
      </li>
      <li id="nav" className="font-poppins text-base">
        <NavLink to="/additems">Add Craft Item</NavLink>
      </li>
      <li id="nav" className="font-poppins text-base">
        <NavLink to={"/myartandcraft"}>My Art & Craft List</NavLink>
        {/* <NavLink to={user ? `/myartandcraft/${user.email}` : "/myartandcraft"}>My Art & Craft List</NavLink> */}
      </li>
    </>
  );
  return (
    <div className="">
      <div className="navbar bg-[#0FA4AFE6] dark:bg-gray-800 dark:border-gray-700 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              id="nav"
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 bg-black p-2 z-40 shadow  rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl hidden md:flex">
            Adnan ART & CRAFT
          </a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <button
            onClick={() => darkModeHandler()}
            className="md:mr-2 w-10 h-10"
          >
            {dark && <IoSunny className="w-6 h-6"></IoSunny>}
            {!dark && <IoMoon className="w-6 h-6"></IoMoon>}
          </button>
          {user ? (
            <>
              <div className="dlex justify-center dropdown  dropdown-end">
                <div className="flex items-center gap-4">
                  <div
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <div className="btn btn-ghost btn-circle avatar">
                      <div className="w-10 rounded-full ">
                        <img
                          alt="Tailwind CSS Navbar component"
                          src={
                            user?.photoURL ||
                            "https://i.ibb.co/JQJbgtc/Profile-Transparent.png"
                          }
                        />
                      </div>
                    </div>
                    {isHovered && (
                      <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                        <h3 className="block w-full px-4 py-2 font-poppins text-sm text-gray-700 hover:bg-gray-100">
                          {user?.displayName}
                        </h3>
                        <button
                          onClick={handelSignout}
                          className="block w-full px-4 py-2 font-poppins font-bold text-sm text-gray-700 hover:bg-red-600 hover:text-white"
                        >
                          LogOut
                        </button>
                      </div>
                    )}
                  </div>
                  <div></div>
                </div>
              </div>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="btn ml-4  bg-[#237d85] border-none text-[#e8ffff] font-inter text-base hover:bg-[#003135]">
                  Login <CiLogin></CiLogin>
                </button>
              </Link>
              <Link to="/register">
                <button className="btn ml-4 bg-[#237d85] border-none text-[#e8ffff] font-inter text-base hover:bg-[#003135]">
                  Register <CiLogin></CiLogin>
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
