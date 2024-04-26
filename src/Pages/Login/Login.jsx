import { FaGoogle, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import loginPic from "../../assets/login.webp";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const {userSignIn, user} = useContext(AuthContext)
  console.log(user)
  const handelLogIn = e => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    userSignIn(email, password)
    .then(() => {
      Swal.fire({
          title: "Good job!",
          text: "Registration successfully!",
          icon: "success"
        });
    })
    .catch(() => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Registration Faild"
      });
    });
  }
  return (
    <div className="">
      <section className="w-full px-12 py-20 mb-12">
        <div className="h-full">
          <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
              <img src={loginPic} className="w-full" alt="Sample image" />
            </div>
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <div className="flex flex-row items-center justify-center lg:justify-start">
                  <p className="mb-0 me-4 text-lg">Login with</p>

                  <button
                    type="button"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                    className=" mx-1 inline-block h-9 w-9 rounded-full bg-primary fill-white p-2 uppercase leading-normal shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                  >
                    <span className="[&>svg]:mx-auto [&>svg]:h-3.5 [&>svg]:w-3.5">
                      <FaGoogle className="text-white text-xl"></FaGoogle>
                    </span>
                  </button>

                  <button
                    type="button"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                    className=" mx-1 inline-block h-9 w-9 rounded-full bg-primary fill-white p-2 uppercase leading-normal shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                  >
                    <span className="[&>svg]:mx-auto [&>svg]:h-3.5 [&>svg]:w-3.5">
                      <FaGithub className="text-white text-2xl"></FaGithub>
                    </span>
                  </button>
                  <button
                    type="button"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                    className=" mx-1 inline-block h-9 w-9 rounded-full bg-primary fill-white p-2 uppercase leading-normal shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                  >
                    <span className="[&>svg]:mx-auto [&>svg]:h-3.5 [&>svg]:w-3.5">
                      <FaXTwitter className="text-white text-xl"></FaXTwitter>
                    </span>
                  </button>
                </div>
                <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
                  <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
                    Or
                  </p>
                </div>
              <form onSubmit={handelLogIn}>
                
                <div className="relative mb-6" data-twe-input-wrapper-init>
                  <input
                    type="text"
                    name="email"
                    className="peer block min-h-[auto] w-full rounded border-2 border-blue-500 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                    placeholder="Email address"
                  />
                  <label className="pointer-events-none absolute left-3  top-0 mb-0 max-w-[90%]  origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:bg-white peer-focus:font-inter peer-focus:text-base peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary">
                    Email address
                  </label>
                </div>
                <div className="relative mb-6" data-twe-input-wrapper-init>
                  <input
                    type="password"
                    name="password"
                    className="peer block min-h-[auto] w-full rounded border-2 border-blue-500 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                    placeholder="Password"
                  />
                  <label className="pointer-events-none absolute left-3  top-0 mb-0 max-w-[90%]  origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:bg-white peer-focus:font-inter peer-focus:text-base peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary">
                    Password
                  </label>
                </div>

                
                <button
                    className="inline-block w-full rounded bg-primary px-7 pb-2 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                  >
                    Login
                  </button>
                  </form>
                  <div className="mt-6 flex items-center justify-between">
                  <div className="mb-[0.125rem] block min-h-[1.5rem] ps-[1.5rem]">
                    <input
                      className="relative float-left -ms-[1.5rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent rtl:float-right dark:border-neutral-400 dark:checked:border-primary dark:checked:bg-primary"
                      type="checkbox"
                      value=""
                      id="exampleCheck2"
                    />
                    <label className="inline-block ps-[0.15rem] hover:cursor-pointer">
                      Remember me
                    </label>
                  </div>
                  <a href="#!">Forgot password?</a>
                </div>
                <div className="text-center lg:text-left">
                  
                  <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                    Do not have an account?
                    <span className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700">
                      <Link className="text-blue-600 ml-4" to="/register">
                        Register
                      </Link>
                    </span>
                  </p>
                </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
