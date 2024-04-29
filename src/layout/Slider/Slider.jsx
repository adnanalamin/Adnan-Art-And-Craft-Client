import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
import banner4 from "../../assets/banner4.webp";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <div className="h-40 md:h-[400px] mt-12 rounded-lg z-10">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="hero h-full"
            style={{
              backgroundImage: `url(${banner1})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  The Artistry of Embroidery
                </h1>
                <p className="mb-5">
                  Embroidery is not limited to fabric; it can also be found on
                  leather, paper, and even metal, showcasing its versatility and
                  adaptability.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero h-full"
            style={{
              backgroundImage: `url(${banner2})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  The Timeless Crafts of Knitting
                </h1>
                <p className="mb-5">
                  Knitting and crocheting have been practiced for centuries,
                  with evidence of knitted textiles dating back to ancient Egypt
                  and crocheted lace emerging in Europe during the 19th century.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero h-full"
            style={{
              backgroundImage: `url(${banner3})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  The Timeless Artistry of Quilting
                </h1>
                <p className="mb-5">
                  Quilting has a rich history spanning cultures and continents,
                  with evidence of quilted textiles dating back to ancient
                  Egypt, China, and Central Asia.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero h-full"
            style={{
              backgroundImage: `url(${banner4})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  The Timeless Artistry of Beadwork
                </h1>
                <p className="mb-5">
                  Beadwork is the art or craft of attaching beads to one another
                  by stringing them onto a thread or thin wire with a sewing or
                  beading needle or sewing them to cloth
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
