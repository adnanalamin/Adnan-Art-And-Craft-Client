import { FaHeadphones } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";
import { BsBugFill } from "react-icons/bs";

const ContactUs = () => {
  return (
    <div>
      <div className="container my-24 mx-auto md:px-6">
        <h1 className="text-center font-poppins font-bold text-4xl">
          Contact Us
        </h1>
        <div className="mt-6">
          <p className="md:w-3/5 mx-auto text-center font-inter text-base">
            Your opinion matters to us! Whether it is a suggestion for
            improvement, a compliment, or a concern, we value your feedback. Our
            dedicated support team is here to address any issues you may
            encounter and ensure your experience with us is nothing short of
            excellent.
          </p>
        </div>
        <section className="mb-32 mt-12">
          <div className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://i.ibb.co/F5HYzWG/depositphotos-73656201-stock-photo-web-contact-us-icons-cubes.webp')]"></div>
          <div className="container px-6 md:px-12">
            <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
              <div className="flex flex-wrap">
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                  <form>
                    <div className="relative mb-6" data-te-input-wrapper-init>
                      <input
                        type="text"
                        className="peer block min-h-[auto] w-full rounded border border-black bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleInput90"
                        placeholder="Name"
                      />
                      <label className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 peer-focus:text-[#171C2A] peer-focus:font-inter transition-all peer-focus:bg-[#f3f0f4] duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-base  peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                        Name
                      </label>
                    </div>
                    <div className="relative mb-6" data-te-input-wrapper-init>
                      <input
                        type="email"
                        className="peer block min-h-[auto] w-full rounded border border-black bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleInput91"
                        placeholder="Email address"
                      />
                      <label
                        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-focus:text-[#171C2A] peer-focus:font-inter
                  peer-focus:bg-[#ffffffea]
                  peer-focus:text-base peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                      >
                        Email address
                      </label>
                    </div>
                    <div className="relative mb-6" data-te-input-wrapper-init>
                      <textarea
                        className="peer block min-h-[auto] w-full rounded border border-black bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Your message"
                      ></textarea>
                      <label
                        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:font-inter
                  peer-focus:bg-white
                  peer-focus:text-base peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-focus:text-[#171C2A] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                      >
                        Message
                      </label>
                    </div>

                    <button
                      type="button"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      className="mb-6 inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] lg:mb-0"
                    >
                      Send
                    </button>
                  </form>
                </div>
                <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                  <div className="flex flex-wrap">
                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                      <div className="flex items-start">
                        <div className="shrink-0">
                          <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                            <FaHeadphones className="h-6 w-6"></FaHeadphones>
                          </div>
                        </div>
                        <div className="ml-6 grow">
                          <p className="mb-2 font-bold dark:text-white">
                            Technical support
                          </p>
                          <p className="text-neutral-500 dark:text-neutral-200">
                            adnan@support.com
                          </p>
                          <p className="text-neutral-500 dark:text-neutral-200">
                            +880 1000 000028
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                      <div className="flex items-start">
                        <div className="shrink-0">
                          <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                            <FaMoneyBillTrendUp className="h-6 w-6"></FaMoneyBillTrendUp>
                          </div>
                        </div>
                        <div className="ml-6 grow">
                          <p className="mb-2 font-bold dark:text-white">
                            Sales questions
                          </p>
                          <p className="text-neutral-500 dark:text-neutral-200">
                            adnan@sales.com
                          </p>
                          <p className="text-neutral-500 dark:text-neutral-200">
                            +880 1000 000028
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
                      <div className="align-start flex">
                        <div className="shrink-0">
                          <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                            <IoNewspaperOutline className="h-6 w-6"></IoNewspaperOutline>
                          </div>
                        </div>
                        <div className="ml-6 grow">
                          <p className="mb-2 font-bold dark:text-white">
                            Press
                          </p>
                          <p className="text-neutral-500 dark:text-neutral-200">
                            adnan@press.com
                          </p>
                          <p className="text-neutral-500 dark:text-neutral-200">
                            +880 1000 000028
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
                      <div className="align-start flex">
                        <div className="shrink-0">
                          <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                            <BsBugFill className="h-6 w-6"></BsBugFill>
                          </div>
                        </div>
                        <div className="ml-6 grow">
                          <p className="mb-2 font-bold dark:text-white">
                            Bug report
                          </p>
                          <p className="text-neutral-500 dark:text-neutral-200">
                            adnan@bugs.com
                          </p>
                          <p className="text-neutral-500 dark:text-neutral-200">
                            +880 1000 000028
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
