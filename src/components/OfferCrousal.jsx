import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

export default function OfferCarousel() {
  // Slides data for carousel
  const slides = [
    {
      alt: 1,
      src: "https://i.pinimg.com/1200x/15/4f/a5/154fa541587cdab59bbe15a3184b7372.jpg",
      route: "/summerCollection",
    },
    {
      alt: 2,
      src: "https://i.pinimg.com/1200x/56/cb/16/56cb1686b8ec46e75d9d9023f6f6cd0d.jpg",
      route: "/sale",
    },
    {
      alt: 3,
      src: "https://i.pinimg.com/1200x/f5/9d/21/f59d21f3ad6e770dccc57a612f18b799.jpg",
    },
    {
      alt: 4,
      src: "https://i.pinimg.com/1200x/84/6e/c5/846ec5c85e4d55ffac5661e3493b62f4.jpg",
      route: "/winterCollection",
    },
  ];

  return (
    <div className="flex justify-center md:hidden">
      <div className="rounded-2xl w-[95%] overflow-hidden shadow h-[20vh]">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.alt}>
              {/* Navigate to category when slide is clicked */}
              <Link to={slide.route}>
                <img
                  src={slide.src}
                  alt={`offer ${slide.alt}`}
                  className="w-full h-full lg:h-140 object-cover"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
