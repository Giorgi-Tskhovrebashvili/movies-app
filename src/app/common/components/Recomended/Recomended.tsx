import Image from "next/image";
import { RecomendedTypes } from "../../types";

const Recomended = ({ movieData }: RecomendedTypes) => {
  const filteredMovies = movieData.filter((movie) => movie.id >= 6);

  if (filteredMovies.length === 0) {
    return <p>No recommended movies available.</p>;
  }

  return (
    <div className="flex flex-col gap-[24px] xl:gap-[32px]">
      <h2 className="w-[195px] text-[20px] not-italic font-normal leading-normal tracking-[-0.312px] md:w-[312px] md:text-[32px] md:tracking-[-0.5px]">
        Recommended for you
      </h2>
      <div className="grid grid-cols-2 gap-[15px] w-[343px] md:grid-cols-3 md:gap-[29px] md:w-[719px] xl:grid-cols-4 xl:gap-[40px] xl:w-[1240px]">
        {filteredMovies.map((movie) => {
          return (
            <div key={movie.id}>
              <div className="flex flex-col">
                <Image
                  src={movie.image.small}
                  alt={movie.title}
                  width={164}
                  height={110}
                  className="w-[164px] h-[110px] md:w-[220px] md:h-[140px] xl:w-[280px] xl:h-[174px]"
                />
                <div className="flex">
                  <p>{movie.year}</p>
                  <Image
                    src={"/assets/Dot.svg"}
                    alt={"."}
                    width={3}
                    height={3}
                  />
                  <div>
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

export default Recomended;
