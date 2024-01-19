import { RiDeleteBinLine } from "react-icons/ri";

const RequestDataTable = ({ requestInfo,handleRequestInfoDelete }) => {
  const {_id, name, biodata_id, status, contact_number, contact_email } =
    requestInfo;
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{name}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
        <p className="text-gray-900 ml-6 whitespace-no-wrap">{biodata_id}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {status === "Approved" ? (
          <p className="text-gray-900 whitespace-no-wrap">{contact_email}</p>
        ) : (
          <p className='text-xl ml-10'>X</p>
        )}
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {status === "Approved" ? (
          <p className="text-gray-900 whitespace-no-wrap">{contact_number}</p>
        ) : (
          <p className='text-xl ml-12'>X</p>
        )}
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      {status === "Approved" ? (
          <p className="text-green-600  whitespace-no-wrap">{status}</p>
        ) : (
            <p className="text-gray-600  whitespace-no-wrap">{status}</p>
        )}
        
      </td>
      <td onClick={() => handleRequestInfoDelete(_id,name)} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span className="relative text-red-600 text-lg cursor-pointer inline-block px-3 py-1  leading-tight">
          <RiDeleteBinLine />
        </span>
      </td>
    </tr>
  );
};

export default RequestDataTable;
