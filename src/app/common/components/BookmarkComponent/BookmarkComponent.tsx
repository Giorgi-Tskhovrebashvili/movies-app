import Image from "next/image";
import { BookmarkType } from "../../types";
import {
  BookmarkButtonIcon,
  DotIcon,
  PlayIcon,
} from "../../../../../public/assets";
import { Button } from "..";

const BookmarkComponent = ({
  movies,
  category,
  title,
  onClick = () => {},
}: BookmarkType) => {
  const bookmarkedMovies = movies.filter(
    (item) => item.category === category && item.isBookmarked
  );

  if (bookmarkedMovies.length === 0) {
    return <p>No movies available in this category.</p>;
  }

  return (
    <div className="flex flex-col gap-[24px] xl:gap-[32px]">
      <h2 className="w-[195px] text-[20px] not-italic font-normal leading-normal tracking-[-0.312px] md:w-[312px] md:text-[32px] md:tracking-[-0.5px]">
        {title}
      </h2>
      <div className="grid grid-cols-2 gap-x-[15px] gap-y-[16px] w-[343px] md:grid-cols-3 md:gap-x-[29px] md:gap-y-[24px] md:w-[719px] xl:grid-cols-4 xl:gap-x-[40px] xl:gap-y-[32px] xl:w-[1240px]">
        {bookmarkedMovies.map((movie) => {
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
                  className={
                    "absolute z-20 top-[16px] right-[16px] hover:scale-110 transition-transform duration-300"
                  }
                  aria-label={`Bookmark ${movie.title}`}
                  onClick={() => onClick(movie.id)}
                >
                  <BookmarkButtonIcon
                    className={`fill-none ${
                      movie.isBookmarked ? "fill-white" : "none"
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

export default BookmarkComponent;
