import { formatDate } from "../../../utils/functions";

const TRow = ({request = {}}) => {
    const tdClases = "px-4 py-3 text-sm text-slate-600 font-medium";

  return (
    <tr>
      <td  className={tdClases}>
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
      <td className={tdClases}>{request?.status ? request?.partnerEmail : "*****@***.com"}</td>
      <td className={tdClases}>{request?.status ? request?.partnerNumber : "**********"}</td>
      <td className={tdClases}>{formatDate(request?.createdAt)}</td>
      <td className={tdClases}>
          <span className="inline-flex items-center gap-2 px-2 py-1 rounded-lg">
          <span className={`w-2 h-2 ${request?.status ? "bg-green-600" : "bg-red-600"} rounded-full`} /> {request?.status}</span>
      </td>
      <td className={tdClases}>
          <button
            type="button"
            className="flex items-center gap-2 rounded-lg text-red-600 bg-red-50 border border-gray-200 px-3 py-1 cursor-pointer"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fill-current inline"
                viewBox="0 0 512 512"
            >
                <path
                d="M424 64h-88V48c0-26.467-21.533-48-48-48h-64c-26.467 0-48 21.533-48 48v16H88c-22.056 0-40 17.944-40 40v56c0 8.836 7.164 16 16 16h8.744l13.823 290.283C87.788 491.919 108.848 512 134.512 512h242.976c25.665 0 46.725-20.081 47.945-45.717L439.256 176H448c8.836 0 16-7.164 16-16v-56c0-22.056-17.944-40-40-40zM208 48c0-8.822 7.178-16 16-16h64c8.822 0 16 7.178 16 16v16h-96zM80 104c0-4.411 3.589-8 8-8h336c4.411 0 8 3.589 8 8v40H80zm313.469 360.761A15.98 15.98 0 0 1 377.488 480H134.512a15.98 15.98 0 0 1-15.981-15.239L104.78 176h302.44z"
                data-original="#000000"
                />
                <path
                d="M256 448c8.836 0 16-7.164 16-16V224c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16zm80 0c8.836 0 16-7.164 16-16V224c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16zm-160 0c8.836 0 16-7.164 16-16V224c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z"
                data-original="#000000"
                />
            </svg>
          Delete
          </button>
      </td>
    </tr>
  )
}

export default TRow;