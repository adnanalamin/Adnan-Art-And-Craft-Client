import { Link } from "react-router-dom";
import signup from "../../assets/register.jpg";
const Register = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg sm:mt-8">
          <div className="w-full p-6 sm:p-12 md:flex justify-center">
            <div>
              <img src={signup} className="w-mx-auto" />
            </div>
            <div className="mt-12 flex flex-col items-center">
              <div className="w-full flex-1">
                <h1 className="text-4xl font-extrabold font-inter text-center mb-6">Register</h1>
                <form>
                  <div className="mx-auto max-w-xs">
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="text"
                      placeholder="Name"
                    />
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="text"
                      placeholder="Photo URL"
                    />
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="email"
                      placeholder="Email"
                    />
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="password"
                      placeholder="Password"
                    />
                    <button className="mt-5 tracking-wide font-poppins font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:text-white focus:outline-none">
                      <span className="">Register</span>
                    </button>
                    <p className="mt-6 text-xs text-gray-600 text-center">
                      Already Have a Account Please? 
                     <Link className="text-blue-600 ml-4 uppercase " to="/login">Login</Link>
                     
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
