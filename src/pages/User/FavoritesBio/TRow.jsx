import { Trash2 } from "lucide-react";
import { calculateAge } from "../../../utils/functions";
import { tdClases } from "../../../utils/options";

const TRow = ({favorite,handleDeleteFavoriteBio}) => {
  const {_id, profile_image, name, biodata_id, date_of_birth, occupation, race} = favorite || {};

  return (
    <tr>
    <td  className={tdClases}>
        <img
            src={profile_image}
            alt={name}
            className="w-9 h-9 rounded-full shrink-0"
        />
    </td>
    <td  className={tdClases}> {name} </td>
    <td className={tdClases}>{biodata_id}</td>
    <td className={tdClases}>{calculateAge(date_of_birth)}</td>
    <td className={tdClases}>{occupation}</td>
    <td className={tdClases}>{race}</td>
    <td className={tdClases}>
      <button
          type="button"
          onClick={() => handleDeleteFavoriteBio(_id, name)}
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