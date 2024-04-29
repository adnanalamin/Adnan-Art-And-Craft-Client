import { FaFacebookF } from "react-icons/fa6";
import { FaGithub, FaMobileAlt, FaTwitter } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#0FA4AFE6] dark:bg-gray-800 dark:border-gray-700 mt-8">
      <footer className="footer p-10  text-base-content">
        <aside className="my-auto">
          <h1 className="text-4xl font-poppins text-white font-extrabold">
            Adnan ART & CRAFT
          </h1>
          <h3 className="flex items-center gap-4 text-base text-white font-inter">
            <FaMobileAlt></FaMobileAlt>Mobile: 01935-203810
          </h3>
          <h3 className="flex items-center gap-4 text-base text-white font-inter">
            <MdOutlineMailOutline></MdOutlineMailOutline>Email:
            devalaminadnan@gmail.com
          </h3>
          <h3 className="flex items-center gap-4 text-base text-white font-inter">
            <FaMapLocationDot></FaMapLocationDot>Address: Nirala, Khulna,
            Bangladesh
          </h3>
        </aside>
        <nav>
          <h6 className="footer-title  text-base text-white font-inter">
            Services
          </h6>
          <a className="link link-hover  text-base text-white font-inter">
            Branding
          </a>
          <a className="link link-hover  text-base text-white font-inter">
            Design
          </a>
          <a className="link link-hover  text-base text-white font-inter">
            Marketing
          </a>
          <a className="link link-hover  text-base text-white font-inter">
            Advertisement
          </a>
        </nav>
        <nav>
          <h6 className="footer-title text-base text-white font-inter">
            Company
          </h6>
          <a className="link link-hover text-base text-white font-inter">
            About us
          </a>
          <a className="link link-hover text-base text-white font-inter">
            Contact
          </a>
          <a className="link link-hover text-base text-white font-inter">
            Jobs
          </a>
          <a className="link link-hover text-base text-white font-inter">
            Press kit
          </a>
        </nav>
        <nav>
          <h6 className="footer-title text-base text-white font-inter">
            Legal
          </h6>
          <a className="link link-hover text-base text-white font-inter">
            Terms of use
          </a>
          <a className="link link-hover text-base text-white font-inter">
            Privacy policy
          </a>
          <a className="link link-hover text-base text-white font-inter">
            Cookie policy
          </a>
        </nav>
      </footer>
      <footer className="footer footer-center p-10  text-base-content rounded">
        <nav>
          <div className="grid grid-flow-col gap-4">
            <FaFacebookF className="text-3xl text-white"></FaFacebookF>
            <FaGithub className="text-3xl text-white"></FaGithub>
            <FaTwitter className="text-3xl text-white"></FaTwitter>
          </div>
        </nav>
        <aside>
          <p className="text-white font-poppins text-base font-bold">
            Copyright © 2024 - All right reserved by Al-Amin
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
