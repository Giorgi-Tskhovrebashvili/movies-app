import Image from "next/image";
import { BookmarkType } from "../../types";
import { DotIcon } from "../../../../../public/assets";

const ComponentForPages = ({ movies, category, title }: BookmarkType) => {
  return (
    <div className="flex flex-col gap-[24px] xl:gap-[32px]">
      <h2 className="w-[195px] text-[20px] not-italic font-normal leading-normal tracking-[-0.312px] md:w-[312px] md:text-[32px] md:tracking-[-0.5px]">
        {title}
      </h2>
      <div className="grid grid-cols-2 gap-x-[15px] gap-y-[16px] w-[343px] md:grid-cols-3 md:gap-x-[29px] md:gap-y-[24px] md:w-[719px] xl:grid-cols-4 xl:gap-x-[40px] xl:gap-y-[32px] xl:w-[1240px]">
        {movies
          .filter((item) => item.category === category)
          .map((movie) => {
            return (
              <div key={movie.id} className="flex flex-col gap-[8px]">
                <Image
                  src={movie.image.small}
                  alt={movie.title}
                  width={164}
                  height={110}
                  className="w-[164px] h-[110px] md:w-[220px] md:h-[140px] xl:w-[280px] xl:h-[174px] rounded-[8px]"
                />
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
  )
}

export default ComponentForPages
