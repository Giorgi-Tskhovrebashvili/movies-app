import Image from "next/image";
import { TrendingMovie } from "../../types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import {
  BookmarkButtonIcon,
  DotIcon,
  PlayIcon,
} from "../../../../../public/assets";
import { Button } from "..";

const Trending = ({ trend, onClick = () => {} }: TrendingMovie) => {
  const trendingMovies = trend.filter((item) => item.isTrending === true);

  if (trendingMovies.length === 0) {
    return <p>No movies available in this category.</p>;
  }

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
        pagination={false}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        breakpoints={{
          1280: { slidesPerView: 2.5, spaceBetween: 40 },
        }}
        className="w-[359px] md:w-[743px] xl:w-[1276px]"
      >
        {trendingMovies.map((movie) => {
          return (
            <SwiperSlide key={movie.id} className="relative">
              <div className="relative group w-[240px] h-[140px] md:w-[470px] md:h-[230px] rounded-[8px] overflow-hidden cursor-pointer">
                <Image
                  src={movie.image.large}
                  alt={movie.title}
                  width={240}
                  height={140}
                  className="w-full h-full object-cover"
                />
                <Button
                  className={
                    "absolute z-20 top-[16px] right-[16px] hover:scale-110 transition-transform duration-300"
                  }
                  aria-label={`Bookmark ${movie.title}`}
                  onClick={() => onClick(movie.id)}
                >
                  <BookmarkButtonIcon
                    className={`fill-none ${
                      movie.isBookmarked ? "fill-white" : "transparent"
                    } transition-colors duration-300`}
                  />
                </Button>
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center">
                  <div className="w-[117px] h-[48px] bg-white opacity-25 rounded-[28.5px] flex items-center justify-center"></div>
                  <div className="absolute flex items-center gap-[19px]">
                    <PlayIcon fill="#FFFFFF" className="" />
                    <p className="text-[18px] not-italic font-normal leading-normal text-white">
                      Play
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col absolute bottom-[24px] left-[24px]">
                <div className="flex items-center gap-[8px]">
                  <p>{movie.year}</p>
                  <DotIcon />
                  <div className="flex gap-[4px] md:gap-[6px]">
                    <Image
                      src={movie.categoryIcon}
                      alt={movie.category}
                      width={12}
                      height={12}
                    />
                    <p>{movie.category}</p>
                  </div>
                  <DotIcon />
                  <p>{movie.rating}</p>
                </div>
                <h3 className="text-[15px] not-italic font-normal leading-normal md:text-[24px]">
                  {movie.title}
                </h3>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Trending;
