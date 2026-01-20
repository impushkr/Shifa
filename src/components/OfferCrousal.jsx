// OfferCarousel.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

export default function OfferCarousel() {
  const slides = [
    {
      alt: 1,
      src: "https://i.pinimg.com/1200x/15/4f/a5/154fa541587cdab59bbe15a3184b7372.jpg",
    },
    {
      alt: 2,
      src: "https://i.pinimg.com/1200x/17/f2/dd/17f2ddc84a0a69cf3546ce30ee419fab.jpg",
      route: "/newarrivals",
    },
    {
      alt: 3,
      src: "https://i.pinimg.com/1200x/f5/9d/21/f59d21f3ad6e770dccc57a612f18b799.jpg",
    },
  ];
  return (
    <div className="flex justify-center md:hidden ">
      <div className=" rounded-2xl w-[95%] overflow-hidden shadow h-[21vh]">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Link to={slide.route}>
                <img
                  src={slide.src}
                  alt={`offer ${slide.alt}`}
                  className="w-full h-full lg:h-140"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
