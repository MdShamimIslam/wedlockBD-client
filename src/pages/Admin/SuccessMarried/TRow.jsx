import { Trash2 } from "lucide-react";
import { tdClases } from "../../../utils/options";
import { StoryModal } from "../../../component/StoryModal";
import { formatDate } from "../../../utils/functions";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const TRow = ({story, handleDeleteStory}) => {
    const axiosSecure = useAxiosSecure();

    const {_id, selfBiodataId, partnerBiodataId, post_date, marriage_date} = story || {};

    const { data: pairData } = useQuery({
            queryKey:  ['pair-biodata', selfBiodataId, partnerBiodataId],
            queryFn: async () => {
                const res = await axiosSecure.get(`/biodatas/pair?id1=${selfBiodataId}&id2=${partnerBiodataId}`);
                return res.data;
            },
    });
      
    const maleData = pairData?.find(d => d.biodata_type === 'Male');
    const femaleData = pairData?.find(d => d.biodata_type === 'Female');


    return (
        <tr>
            <td className={`${tdClases}`}>{maleData?.biodata_id}</td>
            <td className={`${tdClases}`}>{femaleData?.biodata_id}</td>
            <td className={`${tdClases}`}>{post_date?.split("T")[0]}</td>
            <td className={`${tdClases}`}>{formatDate(marriage_date)}</td>
            <td className={`${tdClases}`}> <StoryModal {...{story}}/> </td>
            <td className={`${tdClases}`}>
                <button
                    type="button"
                    onClick={() => handleDeleteStory(_id)}
                    className="flex items-center gap-2 rounded-lg text-red-600 bg-red-50 border border-red-200 px-3 py-1 hover:bg-red-100 transition-colors duration-200"
                >
                    <Trash2 className="w-4 h-4" />
                    Delete
                </button> 
            </td>
        </tr>
    )
}

export default TRow;