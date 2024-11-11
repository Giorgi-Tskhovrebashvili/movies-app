"use client";
import {
  Loader,
  SubmitError,
  MainLayout,
  Recomended,
  Trending,
  Search,
} from "@/app/common/components";
import useFetch from "@/app/common/utils/useFetch";
import { useState } from "react";

export default function Home() {
  const { movies, loading, error } = useFetch();

  const [search, setSearch] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <Loader />;
  if (error) return <SubmitError />;

  return (
    <main>
      <MainLayout>
        <div className="flex flex-col gap-[24px] px-[16px] w-[375px] m-auto h-[100vh] overflow-y-auto scrollbar-hide md:w-[768px] md:px-[20px] md:gap-[35px] xl:w-[1440px] xl:py-[25px] xl:m-0 xl:gap-[35px]">
          <Search
            placeholder={"Search for movies or TV series"}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Trending trend={filteredMovies} />
          <Recomended movieData={filteredMovies} />
        </div>
      </MainLayout>
    </main>
  );
}
