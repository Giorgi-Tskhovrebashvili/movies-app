import Image from "next/image";
import { TrendingMovie } from "../../types";

const Trending = ({ trend }: TrendingMovie) => {
  return (
    <div className="flex flex-col gap-[16px] md:gap-[25px]">
      <h2 className="w-[76px] text-[20px] not-italic font-normal leading-normal tracking-[-0.312px] md:w-[122px] md:text-[32px] md:tracking-[-0.5px]">
        Trending
      </h2>
      <div className="flex">
        {trend.slice(0, 5).map((movie) => {
          return (
            <div key={movie.id}>
              <div className="flex flex-col">
                <Image
                  src={movie.image.large}
                  alt={movie.title}
                  width={240}
                  height={140}
                  className="w-[240px] h-[140px] md:w-[470px] md:h-[230px]"
                />
                <div className="flex">
                  <p>{movie.year}</p>
                  <Image
                    src={"/assets/Dot.svg"}
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
                    src={"/assets/Dot.svg"}
                    alt={"."}
                    width={3}
                    height={3}
                  />
                  <p>{movie.rating}</p>
                </div>
              </div>
              <h3>{movie.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
