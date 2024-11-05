"use client";
import {
  Loader,
  SubmitError,
  MainLayout,
  Input,
} from "@/app/common/components";
import useFetch from "@/app/common/utils/useFetch";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import Swiper modules
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

export default function Home() {
  const { movieData, loading, error } = useFetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
  );

  if (loading) return <Loader />;
  if (error) return <SubmitError />;

  return (
    <main>
      <MainLayout>
        <div className="flex flex-col px-[16px] w-[375px] m-auto min-h-full md:w-[768px] md:px-[20px] xl:w-[1440px] xl:py-[25px] xl:m-0">
          <div className="flex gap-[16px] w-[254px] h-[24px] md:gap-[24px] md:w-[377px] md:h-[32px]">
            <Image
              src={"/assets/search.svg"}
              alt={"search-icon"}
              width={24}
              height={24}
              className="w-[24px] h-[24px] md:w-[32px] md:h-[32px]"
            />
            <Input
              className={
                "bg-transparent placeholder:opacity-49 w-[214px] text-[16px] not-italic font-normal leading-normal outline-none md:text-[24px] md:w-[321px]"
              }
              type={"search"}
              placeholder={"Search for movies or TV series"}
              id={"search"}
              name={"search"}
            />
          </div>
          <h2>Trending</h2>
          <div className="flex">
            {movieData?.results.map((movie: any) => (
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ type: "bullets", clickable: true }}
                autoplay={true}
                loop={true}
                modules={[Autoplay, Navigation, Pagination]}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                  },
                  1280: {
                    slidesPerView: 3,
                  },
                }}
              >
                <SwiperSlide key={movie.id}>
                  <h3>{movie.title}</h3>
                  <Image
                    src={`https://image.tmdb.org/t/p/original${
                      movie ? movie.poster_path : ""
                    }`}
                    alt={movie.title}
                    width={240}
                    height={140}
                  />
                </SwiperSlide>
              </Swiper>
            ))}
          </div>
        </div>
      </MainLayout>
    </main>
  );
}
