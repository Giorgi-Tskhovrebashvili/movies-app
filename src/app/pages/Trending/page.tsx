"use client";
import {
  Loader,
  SubmitError,
  MainLayout,
  Input,
  Recomended,
  Trending,
} from "@/app/common/components";
import useFetch from "@/app/common/utils/useFetch";
import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Home() {
  const { movies, loading, error } = useFetch();

  if (loading) return <Loader />;
  if (error) return <SubmitError />;

  return (
    <main>
      <MainLayout>
        <div className="flex flex-col gap-[24px] px-[16px] w-[375px] m-auto min-h-[100vh] md:w-[768px] md:px-[20px] md:gap-[35px] xl:w-[1440px] xl:py-[25px] xl:m-0 xl:gap-[40px]">
          <div className="flex gap-[16px] w-[254px] h-[24px] md:gap-[24px] md:w-[377px] md:h-[32px]">
            <Image
              src={"/assets/images/search.svg"}
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
          <Trending trend={movies} />
          <Recomended movieData={movies} />
        </div>
      </MainLayout>
    </main>
  );
}
