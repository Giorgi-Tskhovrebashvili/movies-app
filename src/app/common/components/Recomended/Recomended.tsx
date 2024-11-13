import Image from "next/image";
import { RecomendedTypes } from "../../types";
import {
  BookmarkButtonIcon,
  DotIcon,
  PlayIcon,
} from "../../../../../public/assets";
import { Button } from "..";

const Recomended = ({ movieData, onClick }: RecomendedTypes) => {
  const filteredMovies = movieData.filter((movie) => movie.id >= 6);

  if (filteredMovies.length === 0) {
    return <p>No recommended movies available.</p>;
  }

  return (
    <div className="flex flex-col gap-[24px] xl:gap-[32px]">
      <h2 className="w-[195px] text-[20px] not-italic font-normal leading-normal tracking-[-0.312px] md:w-[312px] md:text-[32px] md:tracking-[-0.5px]">
        Recommended for you
      </h2>
      <div className="grid grid-cols-2 gap-x-[15px] gap-y-[16px] w-[343px] md:grid-cols-3 md:gap-x-[29px] md:gap-y-[24px] md:w-[719px] xl:grid-cols-4 xl:gap-x-[40px] xl:gap-y-[32px] xl:w-[1240px]">
        {filteredMovies.map((movie) => {
          return (
            <div key={movie.id} className="flex flex-col gap-[8px]">
              <div className="relative group w-[164px] h-[110px] md:w-[220px] md:h-[140px] xl:w-[280px] xl:h-[174px] rounded-[8px] overflow-hidden cursor-pointer">
                <Image
                  src={movie.image.small}
                  alt={movie.title}
                  width={164}
                  height={110}
                  className="w-full h-full object-cover"
                />
                <Button
                  className={"absolute top-[16px] right-[16px] z-[9999]"}
                  onClick={onClick}
                >
                  <BookmarkButtonIcon
                    fill={movie.isBookmarked ? "#FFFFFF" : "none"}
                    className={""}
                  />
                </Button>
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] bg-lightgray bg-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="xl:w-[117px] xl:h-[48px] xl:opacity-25 bg-white flex items-center justify-center xl:rounded-[28.5px]"></div>
                  <div className="absolute top--[91px] flex items-center gap-[19px]">
                    <PlayIcon fill="#FFFFFF" className="" />
                    <p className="text-[18px] not-italic font-normal leading-normal">
                      Play
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[5px]">
                <div className="flex items-center gap-[6px] md:gap-[8px]">
                  <p className="opacity-75 text-[11px] not-italic font-normal leading-normal md:text-[13px]">
                    {movie.year}
                  </p>
                  <DotIcon />
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
                  <DotIcon />
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
  );
};

export default Recomended;
