import { Edit3, Trash2 } from "lucide-react";
import { tdClases } from "../../../utils/options";

const TRow = ({requestData, handleApprovedRequest, handleDeleteRequest}) => {
    const {_id, partnerImg, partnerName, selfName, selfEmail, partnerBiodataId, status } = requestData || {};

    return (
        <tr>
            <td  className={tdClases}>
                <img
                    src={partnerImg}
                    alt={partnerName}
                    className="w-9 h-9 rounded-full shrink-0"
                />
            </td>
            <td className={tdClases}>{partnerName}</td>
            <td className={tdClases}>{partnerBiodataId}</td>
            <td  className={tdClases}> {selfName} </td>
            <td className={tdClases}>{selfEmail}</td>
            <td className={tdClases}>
                <span className="inline-flex items-center gap-2 px-2 py-1 rounded-lg">
                <span className={`w-2 h-2 ${status === 'approved' ? "bg-green-600" : "bg-red-600"} rounded-full`} /> {status}</span>
            </td> 
            <td className={`${tdClases} flex gap-2`}>
                <button
                    type="button"
                    onClick={() => handleApprovedRequest(_id)}
                    className="flex items-center gap-2 rounded-lg text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 hover:bg-blue-100 transition-colors duration-200 ml-2"
                >
                    <Edit3 className="w-4 h-4" />
                </button>
                <button
                    type="button"
                    onClick={() => handleDeleteRequest(_id, selfName)}
                    className="flex items-center gap-2 rounded-lg text-red-600 bg-red-50 border border-red-200 px-3 py-1 hover:bg-red-100 transition-colors duration-200"
                >
                    <Trash2 className="w-4 h-4" />
                </button> 
            </td>
        </tr>
    )
}

export default TRow;