import useBio from "../../../hooks/useBio";
import { formatDate } from "../../../utils/functions";
import { tdClases } from "../../../utils/options";

const TRow = ({request = {}}) => {
  const {status, partnerImg, partnerName, partnerBiodataId, partnerEmail, partnerNumber, createdAt } = request || {};
  const {bio} = useBio();

  const checkStatus = (status === "approved" ||  bio?.premium_status) ? true : false;

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
      <td className={tdClases}>{checkStatus ? partnerEmail : "*****@***.com"}</td>
      <td className={tdClases}>{checkStatus ? partnerNumber : "**********"}</td>
      <td className={tdClases}>{formatDate(createdAt)}</td>
      {!bio?.premium_status && <td className={tdClases}>
          <span className="inline-flex items-center gap-2 px-2 py-1 rounded-lg">
          <span className={`w-2 h-2 ${checkStatus ? "bg-green-600" : "bg-red-600"} rounded-full`} /> {status}</span>
      </td> }
    </tr>
  )
}

export default TRow;