import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import "./styles.css";
import "./styles.css";
import { Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa";

const HappyClient = () => {
  return (
    <div>
      <h1 className="text-center font-poppins font-bold text-4xl dark:text-white">
        Happy Client
      </h1>
      <div className="mt-6 mb-10">
        <p className="md:w-3/5 mx-auto text-center font-inter text-base dark:text-white">
          At Adnan ART & CRAFT, our clients are at the heart of everything we
          do. Their satisfaction is not just a goal; it is our passion. We take
          immense pride in delivering exceptional service and exceeding
          expectations. But don not just take our word for it—here is what some
          of our delighted clients have to say.
        </p>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <section className="bg-white rounded-lg">
            <div className="w-52">
              <div className="w-full">
                <div className="bg-[#4ea3eeaa] rounded-lg p-8 text-center ">
                  <p className="font-bold uppercase text-white">John Doe</p>
                  <p className="text-xl font-light italic text-gray-700">
                    This podcast is amazing! The storytelling and production
                    quality are top-notch. I can not wait for the next episode!
                  </p>
                  <div className="flex items-center justify-center space-x-2 mt-4 w-full">
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="bg-white rounded-lg">
            <div className="w-52">
              <div className="w-full">
                <div className="bg-[#4ea3eeaa] rounded-lg p-8 text-center ">
                  <p className="font-bold uppercase text-white">Thomas</p>
                  <p className="text-xl font-light italic text-gray-700">
                    This podcast is amazing! The storytelling and production
                    quality are top-notch. I can not wait for the next episode!
                  </p>
                  <div className="flex items-center justify-center space-x-2 mt-4 w-full">
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="bg-white rounded-lg">
            <div className="w-52">
              <div className="w-full">
                <div className="bg-[#4ea3eeaa] rounded-lg p-8 text-center ">
                  <p className="font-bold uppercase text-white">Henry</p>
                  <p className="text-xl font-light italic text-gray-700">
                    This podcast is amazing! The storytelling and production
                    quality are top-notch. I can not wait for the next episode!
                  </p>
                  <div className="flex items-center justify-center space-x-2 mt-4 w-full">
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="bg-white rounded-lg">
            <div className="w-52">
              <div className="w-full">
                <div className="bg-[#4ea3eeaa] rounded-lg p-8 text-center ">
                  <p className="font-bold uppercase text-white">Matthew</p>
                  <p className="text-xl font-light italic text-gray-700">
                    This podcast is amazing! The storytelling and production
                    quality are top-notch. I can not wait for the next episode!
                  </p>
                  <div className="flex items-center justify-center space-x-2 mt-4 w-full">
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="bg-white rounded-lg">
            <div className="w-52">
              <div className="w-full">
                <div className="bg-[#4ea3eeaa] rounded-lg p-8 text-center ">
                  <p className="font-bold uppercase text-white">Joseph</p>
                  <p className="text-xl font-light italic text-gray-700">
                    This podcast is amazing! The storytelling and production
                    quality are top-notch. I can not wait for the next episode!
                  </p>
                  <div className="flex items-center justify-center space-x-2 mt-4 w-full">
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="bg-white rounded-lg">
            <div className="w-52">
              <div className="w-full">
                <div className="bg-[#4ea3eeaa] rounded-lg p-8 text-center ">
                  <p className="font-bold uppercase text-white">John</p>
                  <p className="text-xl font-light italic text-gray-700">
                    This podcast is amazing! The storytelling and production
                    quality are top-notch. I can not wait for the next episode!
                  </p>
                  <div className="flex items-center justify-center space-x-2 mt-4 w-full">
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="bg-white rounded-lg">
            <div className="w-52">
              <div className="w-full">
                <div className="bg-[#4ea3eeaa] rounded-lg p-8 text-center ">
                  <p className="font-bold uppercase text-white">Charles</p>
                  <p className="text-xl font-light italic text-gray-700">
                    This podcast is amazing! The storytelling and production
                    quality are top-notch. I can not wait for the next episode!
                  </p>
                  <div className="flex items-center justify-center space-x-2 mt-4 w-full">
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="bg-white rounded-lg">
            <div className="w-52">
              <div className="w-full">
                <div className="bg-[#4ea3eeaa] rounded-lg p-8 text-center ">
                  <p className="font-bold uppercase text-white">Michael</p>
                  <p className="text-xl font-light italic text-gray-700">
                    This podcast is amazing! The storytelling and production
                    quality are top-notch. I can not wait for the next episode!
                  </p>
                  <div className="flex items-center justify-center space-x-2 mt-4 w-full">
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="bg-white rounded-lg">
            <div className="w-52">
              <div className="w-full">
                <div className="bg-[#4ea3eeaa] rounded-lg p-8 text-center ">
                  <p className="font-bold uppercase text-white">Daniel</p>
                  <p className="text-xl font-light italic text-gray-700">
                    This podcast is amazing! The storytelling and production
                    quality are top-notch. I can not wait for the next episode!
                  </p>
                  <div className="flex items-center justify-center space-x-2 mt-4 w-full">
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="bg-white rounded-lg">
            <div className="w-52">
              <div className="w-full">
                <div className="bg-[#4ea3eeaa] rounded-lg p-8 text-center ">
                  <p className="font-bold uppercase text-white">William</p>
                  <p className="text-xl font-light italic text-gray-700">
                    This podcast is amazing! The storytelling and production
                    quality are top-notch. I can not wait for the next episode!
                  </p>
                  <div className="flex items-center justify-center space-x-2 mt-4 w-full">
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="bg-white rounded-lg">
            <div className="w-52">
              <div className="w-full">
                <div className="bg-[#4ea3eeaa] rounded-lg p-8 text-center ">
                  <p className="font-bold uppercase text-white">James</p>
                  <p className="text-xl font-light italic text-gray-700">
                    This podcast is amazing! The storytelling and production
                    quality are top-notch. I can not wait for the next episode!
                  </p>
                  <div className="flex items-center justify-center space-x-2 mt-4 w-full">
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                    <FaStar className="text-yellow-500 w-4 h-4"></FaStar>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HappyClient;
