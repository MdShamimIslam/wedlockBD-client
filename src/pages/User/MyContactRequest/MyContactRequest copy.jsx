import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import THead from "./THead";
import TRow from "./TRow";
import { formatDate } from "../../../utils/functions";


const MyContactRequest = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();

  const { data: requestData = [], refetch } = useQuery({
    queryKey: ["requestBiodata", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get( `/contact-request?email=${user?.email}`);
      return res.data;
    }
  });

  return (
    <div className="overflow-x-auto w-full lg:max-w-[1400px] mx-auto mt-8">
      <table className="min-w-full bg-white">
        <THead/>
        <tbody className="whitespace-nowrap divide-y divide-gray-200">
        { requestData?.map((request) => 
            <tr key={request?._id}>
              <td  className="px-4 py-3 text-sm text-slate-900 font-medium">
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
              <td className="px-4 py-3 text-sm text-slate-600 font-medium">{request?.partnerEmail}</td>
              <td className="px-4 py-3 text-sm text-slate-600 font-medium">{request?.partnerNumber}</td>
              {/* <td className="px-4 py-3 text-sm text-slate-600 font-medium">{formatDate(request?.createdAt)}</td> */}

              <td className="px-4 py-3 text-sm text-slate-600 font-medium">
                <span className="inline-flex items-center gap-2 px-2 py-1 rounded-lg">
                  <span className="w-2 h-2 bg-red-600 rounded-full" /> {request?.status}</span>
              </td>
              
              <td className="flex gap-3 px-4 py-3 text-sm font-medium">
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
          
         )}
        </tbody>
      </table>
      <div className="md:flex m-4">
        <p className="text-sm text-slate-600 flex-1">
          Showind 1 to 10 of 100 entries
        </p>
        <div className="flex items-center max-md:mt-4">
          <p className="text-sm text-slate-600">Display</p>
          <select className="text-sm text-slate-900 border border-gray-300 rounded-md h-9 mx-4 px-1 outline-none">
            <option>10</option>
            <option>20</option>
            <option>50</option>
            <option>100</option>
          </select>
          <ul className="flex space-x-3 justify-center">
            <li className="flex items-center justify-center shrink-0 bg-gray-100 w-9 h-9 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 fill-gray-400"
                viewBox="0 0 55.753 55.753"
              >
                <path
                  d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
                  data-original="#000000"
                />
              </svg>
            </li>
            <li className="flex items-center justify-center shrink-0 bg-blue-500  border hover:border-blue-500 border-blue-500 cursor-pointer text-sm font-medium text-white px-[13px] h-9 rounded-md">
              1
            </li>
            <li className="flex items-center justify-center shrink-0 border border-gray-300 hover:border-blue-500 cursor-pointer text-sm font-medium text-slate-900 px-[13px] h-9 rounded-md">
              2
            </li>
            <li className="flex items-center justify-center shrink-0 border border-gray-300 hover:border-blue-500 cursor-pointer text-sm font-medium text-slate-900 px-[13px] h-9 rounded-md">
              3
            </li>
            <li className="flex items-center justify-center shrink-0 border border-gray-300 hover:border-blue-500 cursor-pointer text-sm font-medium text-slate-900 px-[13px] h-9 rounded-md">
              4
            </li>
            <li className="flex items-center justify-center shrink-0 border border-gray-300 hover:border-blue-500 cursor-pointer w-9 h-9 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 fill-gray-400 rotate-180"
                viewBox="0 0 55.753 55.753"
              >
                <path
                  d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
                  data-original="#000000"
                />
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MyContactRequest;
