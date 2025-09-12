import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useBiodatas = ({ filters = {}, page = 1, limit  } = {}) => {
  const axiosPublic = useAxiosPublic();
  const { loading } = useAuth();

  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["biodatas", filters, page, limit],
    enabled: !loading,
    keepPreviousData: true,
    queryFn: async () => {
      const res = await axiosPublic.get("/biodatas", {
        params: {
          search: filters.search || "",
          division: filters.division || "",
          occupation: filters.occupation || "",
          biodataType: filters.biodataType || "",
          minAge: filters.ageRange?.[0] || "",
          maxAge: filters.ageRange?.[1] || "",
          sortBy: filters.sortBy || "",
          page,
          limit,
        },
      });
      return res?.data;
    },
  });

  return {
    biodatas: data?.biodatas || [],
    total: data?.total || 0,
    totalPages: data?.totalPages || 0,
    page : data?.page || 1,
    limit : data?.limit,
    isLoading,
    isFetching,
    refetch,
  };
};

export default useBiodatas;
