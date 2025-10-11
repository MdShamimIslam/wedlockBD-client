import { Edit3, Trash2 } from "lucide-react";
import useBio from "../../../hooks/useBio";
import { formatDate } from "../../../utils/functions";

const TRow = ({premiumInfo = {}, handlePremiumInfoEdit, handlePremiumInfoDelete}) => {
    const {_id, name, contact_email, biodata_id, payment_status, payment_date} = premiumInfo || {};
    const tdClases = "px-4 py-3 text-sm text-slate-600 font-medium";
    const {bio} = useBio();
  
    const checkStatus = (payment_status === "approved" ||  bio?.premium_status) ? true : false;

    return (
        <tr>
        <td className={tdClases}>{name}</td>
        <td className={tdClases}>{contact_email}</td>
        <td className={tdClases}>{biodata_id}</td>
        <td className={tdClases}>{formatDate(payment_date)}</td>
        <td className={tdClases}>
            <span className="inline-flex items-center gap-2 px-2 py-1 rounded-lg">
            <span className={`w-2 h-2 ${checkStatus ? "bg-green-600" : "bg-red-600"} rounded-full`} /> {payment_status}</span>
        </td> 
        <td className={`${tdClases}`}>
           {!checkStatus && <button
                type="button"
                onClick={() => handlePremiumInfoEdit(biodata_id)}
                className="flex items-center gap-2 rounded-lg text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 hover:bg-blue-100 transition-colors duration-200 ml-2"
            >
                <Edit3 className="w-4 h-4" />
                Make Premium
            </button> } 
            {checkStatus && <button
                type="button"
                onClick={() => handlePremiumInfoDelete(_id, name)}
                className="flex items-center gap-2 rounded-lg text-red-600 bg-red-50 border border-red-200 px-3 py-1 hover:bg-red-100 transition-colors duration-200"
            >
                <Trash2 className="w-4 h-4" />
                Delete
            </button> }
        </td>
        </tr>
    )
}

export default TRow;