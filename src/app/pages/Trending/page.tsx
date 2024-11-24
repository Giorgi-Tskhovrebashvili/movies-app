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
  const [search, setSearch] = useState("");
  const { movies, filteredMovies, loading, error } = useFetch();
  const [updatedMovies, setUpdatedMovies] = useState(movies);

  const handleBookmarkToggle = (id: number) => {
    const newMovies = updatedMovies.map((movie) =>
      movie.id === id ? { ...movie, isBookmarked: !movie.isBookmarked } : movie
    );
    setUpdatedMovies(newMovies);
  };

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
          {search && (
            <h1 className="text-[20px] not-italic font-normal leading-normal tracking-[-0.312px] md:text-[32px] md:tracking-[-0.5px]">
              Found {filteredMovies.length} results for {search}
            </h1>
          )}
          <Trending trend={filteredMovies} onClick={handleBookmarkToggle} />
          <Recomended
            movieData={filteredMovies}
            onClick={handleBookmarkToggle}
          />
        </div>
      </MainLayout>
    </main>
  );
}
