import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import { CiLogin } from "react-icons/ci";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, userLogout } = useContext(AuthContext);

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
        <NavLink to="/aa">My Art & Craft List</NavLink>
      </li>
    </>
  );
  return (
    <div className="">
      <div className="navbar bg-[#0FA4AFE6] text-white">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Adnan ART & CRAFT</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="dlex justify-center dropdown fl dropdown-end">
                <div className="flex items-center gap-4">
                  <div
                    className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom"
                    data-tip={user?.displayName || "Adnan ART & CRAFT"}
                  >
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
                  <div>
                    <button
                      onClick={handelSignout}
                      className="btn ml-4 bg-[#237d85] border-none text-[#e8ffff] font-inter text-base hover:bg-[#003135]"
                    >
                      LogOut
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="btn ml-4 bg-[#237d85] border-none text-[#e8ffff] font-inter text-base hover:bg-[#003135]">
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
