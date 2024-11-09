import Image from "next/image";
import { TrendingMovie } from "../../types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Keyboard } from "swiper/modules";

const Trending = ({ trend }: TrendingMovie) => {
  return (
    <div className="flex flex-col gap-[16px] md:gap-[25px] ">
      <h2 className="w-[76px] text-[20px] not-italic font-normal leading-normal tracking-[-0.312px] md:w-[122px] md:text-[32px] md:tracking-[-0.5px]">
        Trending
      </h2>
      <Swiper
        style={{ marginLeft: 0, marginRight: 0 }}
        slidesPerView={1.5}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        breakpoints={{
          1280: { slidesPerView: 2.5, spaceBetween: 40 },
        }}
        className="w-[359px] md:w-[743px] xl:w-[1276px]"
      >
        {trend.slice(0, 5).map((movie) => {
          return (
            <SwiperSlide key={movie.id}>
              <div className="flex flex-col">
                <Image
                  src={movie.image.large}
                  alt={movie.title}
                  width={240}
                  height={140}
                  className="w-[240px] h-[140px] md:w-[470px] md:h-[230px]"
                />
                <div className="flex gap-[8px]">
                  <p>{movie.year}</p>
                  <Image
                    src={"/assets/images/Dot.svg"}
                    alt={"."}
                    width={3}
                    height={3}
                  />
                  <div className="flex">
                    <Image
                      src={movie.categoryIcon}
                      alt={movie.category}
                      width={12}
                      height={12}
                    />
                    <p>{movie.category}</p>
                  </div>
                  <Image
                    src={"/assets/images/Dot.svg"}
                    alt={"."}
                    width={3}
                    height={3}
                  />
                  <p>{movie.rating}</p>
                </div>
              </div>
              <h3>{movie.title}</h3>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Trending;
