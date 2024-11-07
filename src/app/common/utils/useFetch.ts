import { useEffect, useState } from "react";
import { MovieInfo } from "../types";

const useFetch = () => {
  const [movies, setMovies] = useState<MovieInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok)
          throw new Error(`Error fetching data: ${response.statusText}`);

        const result = await response.json();
        console.log(result);

        setMovies(result as MovieInfo[]);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    movies,
    loading,
    error,
  };
};

export default useFetch;
