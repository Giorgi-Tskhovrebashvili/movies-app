"use client";
import {
  BookmarkComponent,
  Loader,
  MainLayout,
  Search,
  SubmitError,
} from "@/app/common/components";
import useFetch from "@/app/common/utils/useFetch";
import { useState } from "react";

const Bookmarks = () => {
  const [search, setSearch] = useState("");
  const { movies, loading, error } = useFetch();
  const [updatedMovies, setUpdatedMovies] = useState(movies);

  const handleBookmarkToggle = (id: number) => {
    const newMovies = updatedMovies.map((movie) =>
      movie.id === id ? { ...movie, isBookmarked: !movie.isBookmarked } : movie
    );
    setUpdatedMovies(newMovies);
  };
  const filteredMovies = movies.filter(
    (movie) =>
      movie.isBookmarked &&
      movie.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <Loader />;
  if (error) return <SubmitError />;

  return (
    <MainLayout>
      <div className="flex flex-col gap-[24px] px-[16px] w-[375px] m-auto h-[100vh] overflow-y-auto scrollbar-hide md:w-[768px] md:px-[20px] md:gap-[35px] xl:w-[1440px] xl:py-[25px] xl:m-0 xl:gap-[35px]">
        <Search
          placeholder={"Search for bookmarked shows"}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && (
          <h1 className="text-[20px] not-italic font-normal leading-normal tracking-[-0.312px] md:text-[32px] md:tracking-[-0.5px]">
            Found {filteredMovies.length} results for {search}
          </h1>
        )}
        <BookmarkComponent
          movies={filteredMovies.filter((movie) => movie.category === "Movie")}
          category={"Movie"}
          title={"Bookmarked Movies"}
          onClick={handleBookmarkToggle}
        />
        <BookmarkComponent
          movies={filteredMovies.filter(
            (movie) => movie.category === "TV Series"
          )}
          category={"TV Series"}
          title={"Bookmarked TV Series"}
          onClick={handleBookmarkToggle}
        />
      </div>
    </MainLayout>
  );
};

export default Bookmarks;
