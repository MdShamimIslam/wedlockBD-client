import useBio from "../../../hooks/useBio";
import { formatDate } from "../../../utils/functions";

const TRow = ({request = {}}) => {
  const tdClases = "px-4 py-3 text-sm text-slate-600 font-medium";
  const {bio} = useBio();

  const checkStatus = (request?.status === "approved" ||  bio?.premium_status) ? true : false;

  return (
    <tr>
      <td className={tdClases}>
          <div className="flex items-center cursor-pointer w-max">
          <img
              src={request?.partnerImg}
              alt={request?.partnerName}
              className="w-9 h-9 rounded-full shrink-0"
          />
          <div className="ml-2">
              <p>{request?.partnerName}</p>
          </div>
          </div>
      </td>
      <td className={tdClases}>{request?.partnerBiodataId}</td>
      <td className={tdClases}>{checkStatus ? request?.partnerEmail : "*****@***.com"}</td>
      <td className={tdClases}>{checkStatus ? request?.partnerNumber : "**********"}</td>
      <td className={tdClases}>{formatDate(request?.createdAt)}</td>
      {!bio?.premium_status && <td className={tdClases}>
          <span className="inline-flex items-center gap-2 px-2 py-1 rounded-lg">
          <span className={`w-2 h-2 ${checkStatus ? "bg-green-600" : "bg-red-600"} rounded-full`} /> {request?.status}</span>
      </td> }
    </tr>
  )
}

export default TRow;