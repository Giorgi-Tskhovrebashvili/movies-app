"use client";
import {
  Input,
  Loader,
  MainLayout,
  SubmitError,
} from "@/app/common/components";
import useFetch from "@/app/common/utils/useFetch";
import Image from "next/image";

const TVSeries = () => {
  const { movies, loading, error } = useFetch();

  if (loading) return <Loader />;
  if (error) return <SubmitError />;

  return (
    <MainLayout>
      <div className="flex flex-col gap-[24px] px-[16px] w-[375px] m-auto h-[100vh] overflow-y-auto scrollbar-hide md:w-[768px] md:px-[20px] md:gap-[35px] xl:w-[1440px] xl:py-[25px] xl:m-0 xl:gap-[35px]">
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
        <div className="flex flex-col gap-[24px] xl:gap-[32px]">
          <h2 className="w-[195px] text-[20px] not-italic font-normal leading-normal tracking-[-0.312px] md:w-[312px] md:text-[32px] md:tracking-[-0.5px]">
            TV Series
          </h2>
          <div className="grid grid-cols-2 gap-x-[15px] gap-y-[16px] w-[343px] md:grid-cols-3 md:gap-x-[29px] md:gap-y-[24px] md:w-[719px] xl:grid-cols-4 xl:gap-x-[40px] xl:gap-y-[32px] xl:w-[1240px]">
            {movies
              .filter((item) => item.category === "TV Series")
              .map((movie) => {
                return (
                  <div key={movie.id} className="flex flex-col gap-[8px]">
                    <Image
                      src={movie.image.small}
                      alt={movie.title}
                      width={164}
                      height={110}
                      className="w-[164px] h-[110px] md:w-[220px] md:h-[140px] xl:w-[280px] xl:h-[174px]"
                    />
                    <div className="flex flex-col gap-[5px]">
                      <div className="flex gap-[6px] md:gap-[8px]">
                        <p className="opacity-75 text-[11px] not-italic font-normal leading-normal md:text-[13px]">
                          {movie.year}
                        </p>
                        <Image
                          src={"/assets/images/Dot.svg"}
                          alt={"."}
                          width={3}
                          height={3}
                        />
                        <div className="flex gap-[4px] md:gap-[6px]">
                          <Image
                            src={movie.categoryIcon}
                            alt={movie.category}
                            width={12}
                            height={12}
                          />
                          <p className="opacity-75 text-[11px] not-italic font-normal leading-normal md:text-[13px]">
                            {movie.category}
                          </p>
                        </div>
                        <Image
                          src={"/assets/images/Dot.svg"}
                          alt={"."}
                          width={3}
                          height={3}
                        />
                        <p className="opacity-75 text-[11px] not-italic font-normal leading-normal md:text-[13px]">
                          {movie.rating}
                        </p>
                      </div>
                      <h3 className="text-[14px] not-italic font-normal leading-normal md:text-[18px]">
                        {movie.title}
                      </h3>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default TVSeries;
