import { useEffect, useState } from "react";
import { MovieData } from "../types";

const useFetch = (url: string) => {
  const [movieData, setMovieData] = useState<MovieData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok)
          throw new Error(`Error fetching data: ${response.statusText}`);

        const result = await response.json();
        setMovieData(result);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return {
    movieData,
    loading,
    error,
  };
};

export default useFetch;
