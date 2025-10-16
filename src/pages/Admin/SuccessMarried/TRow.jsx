import { Trash2 } from "lucide-react";
import { tdClases } from "../../../utils/options";
import { StoryModal } from "../../../component/StoryModal";

const TRow = ({story, handleDeleteStory}) => {
    const {_id, selfBiodataId, partnerBiodataId, ratings, post_date, marriage_date} = story || {};

    return (
        <tr>
            <td className={`${tdClases}`}>{selfBiodataId?.name}</td>
            <td className={`${tdClases}`}>{partnerBiodataId?.name}</td>
            <td className={`${tdClases}`}>{post_date?.split("T")[0]}</td>
            <td className={`${tdClases}`}>{marriage_date?.split("T")[0]}</td>
            <td className={`${tdClases}`}>{ratings}</td>
            <td className={`${tdClases}`}>
                <StoryModal {...{story}} />
            </td>
            <td className={`${tdClases}`}>
                <button
                    type="button"
                    onClick={() => handleDeleteStory(_id,)}
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