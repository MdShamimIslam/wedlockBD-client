import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import THead from "./THead";
import TRow from "./TRow";
import TPagination from "./TPagination";

const FavoritesBio = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();

  const { data: favorites = [], refetch } = useQuery({
    queryKey: ["favoritesBiodata", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/favorites?email=${user?.email}`);

      return res.data;
    },
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center my-80">
        <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-double border-4 border-r-0 border-l-0 border-b-sky-400 border-t-sky-700"></div>
      </div>
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
      <div className="overflow-hidden w-full lg:max-w-[1400px] mx-auto mt-8 ">
      <div className="overflow-x-auto">
        <table className="bg-white min-w-full">
            <THead/>
            <tbody className="whitespace-nowrap divide-y divide-gray-200">
            { favorites?.map((favorite) => <TRow key={favorite._id} {...{favorite,handleDeleteFavoriteBio}} /> )}
            </tbody>
        </table>
      </div>
      <TPagination/>
    </div>
    </div>
  );
};

export default FavoritesBio;
