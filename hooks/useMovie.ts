import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useMovie = (id?: String) => {
  const { data, error, isLoading } = useSWR(
    id ? `/api/movies/${id}` : null,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnMount: false,
      revalidateOnFocus: false,
    }
  );

  return {
    data,
    error,
    isLoading,
  };
};
export default useMovie;
