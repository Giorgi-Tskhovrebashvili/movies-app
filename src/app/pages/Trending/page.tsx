"use client";
import {
  Loader,
  SubmitError,
  MainLayout,
  Input,
} from "@/app/common/components";
import useFetch from "@/app/common/utils/useFetch";
import Image from "next/image";

export default function Home() {
  const { movieData, loading, error } = useFetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
  );

  if (loading) return <Loader />;
  if (error) return <SubmitError />;

  return (
    <main>
      <MainLayout>
        <div className="flex flex-col p-[16px]">
          <Input
            className={""}
            type={"search"}
            placeholder={"Search for movies or TV series"}
            id={"search"}
            name={"search"}
          />
          <h2>Trending</h2>
          <div className="flex flex-col xl:w-[1240px] xl:h-[556px]">
            {movieData?.results.map((movie: any) => {
              return (
                <div key={movie.id}>
                  <h3>{movie.title}</h3>
                  <Image
                    src={movie.poster_path}
                    alt={movie.title}
                    width={240}
                    height={140}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </MainLayout>
    </main>
  );
}
