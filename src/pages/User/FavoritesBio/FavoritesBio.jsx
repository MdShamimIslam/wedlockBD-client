import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import TRow from "./TRow";
import EmptyState from "../../../component/EmptyState";
import { Heart } from "lucide-react";
import TPagination from "../../../component/common/TPagination";
import usePagination from "../../../hooks/usePagination";
import TableHead from "../../../component/common/TableHead";
import { tHeadUserFavorite } from "../../../utils/options";

const FavoritesBio = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: favorites = [], refetch } = useQuery({
    queryKey: ["favoritesBiodata", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/favorites?email=${user?.email}`);

      return res.data;
    },
  });

  const { currentData, currentPage, setCurrentPage, rowsPerPage, setRowsPerPage, totalPages, totalEntries } = usePagination(favorites, 10);


  if (favorites?.length === 0) {
    return (
      <EmptyState
      icon={Heart}
      title="No favorites yet"
      description="When you add someone to your favorites, you’ll see them here."
      linkText="Find Matches"
      path="/biodatas"
    />
    );
  }

  const handleDeleteFavoriteBio = (id,name) => {
    Swal.fire({
        title: "Are you sure?",
        text: `You want to delete ${name}`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/favorites/${id}`).then((data) => {
            if (data.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Deleted Successfully",
                icon: "success",
              });
            }
          });
       
        }
      });
  };

  return (
    <div className="">
       <Helmet>
        <title> Favorites Biodata | WedlockBD</title>
      </Helmet>
      <div className="overflow-hidden w-full lg:max-w-[1500px] mx-auto mt-4">
      <div className="overflow-x-auto">
        <table className="bg-white min-w-full">
            <TableHead headOptions={tHeadUserFavorite} />
            <tbody className="whitespace-nowrap divide-y divide-gray-200">
            { currentData?.map((favorite) => <TRow key={favorite._id} {...{favorite,handleDeleteFavoriteBio}} /> )}
            </tbody>
        </table>
      </div>
      <TPagination {...{currentPage, totalPages, totalEntries, rowsPerPage, setCurrentPage, setRowsPerPage}} />
    </div>
    </div>
  );
};

export default FavoritesBio;
