import { Link, NavLink } from "react-router-dom";
import './navbar.css'
import { CiLogin } from "react-icons/ci";



const Navbar = () => {
    const navItems = <>
        <li id="nav" className="font-poppins text-base"><NavLink to='/'>Home</NavLink></li>
        <li id="nav" className="font-poppins text-base"><NavLink to='/aa'>All Art & craft Items</NavLink></li>
        <li id="nav" className="font-poppins text-base"><NavLink to='/aa'>Add Craft Item</NavLink></li>
        <li id="nav" className="font-poppins text-base"><NavLink to='/aa'>My Art & Craft List</NavLink></li>
    </>
    return (
        <div className="">
            <div className="navbar bg-[#0FA4AFE6] text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul id="nav" tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navItems}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Adnan ART & CRAFT</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navItems}
    </ul>
  </div>
  <div className="navbar-end">
    <Link to="/login">
    <button className="btn ml-4 bg-[#237d85] border-none text-[#e8ffff] font-inter text-base hover:bg-[#003135]">Login <CiLogin></CiLogin></button>
    </Link>
    <button className="btn ml-4 bg-[#237d85] border-none text-[#e8ffff] font-inter text-base hover:bg-[#003135]">Register  <CiLogin></CiLogin></button>
  </div>
</div>
        </div>
    );
};

export default Navbar;