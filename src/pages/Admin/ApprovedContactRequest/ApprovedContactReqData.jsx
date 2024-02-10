import React from 'react';
import { RiDeleteBinLine } from "react-icons/ri";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";


const ApprovedContactReqData = ({requestData,handleMakeContactRequest,handleContactRequestInfoDelete}) => {
    const {_id,name,selfEmail,biodata_id,status,price} = requestData;
    return (
        <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{name}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
        <p className="text-gray-900 ml-6 whitespace-no-wrap">{biodata_id}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{selfEmail}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{price} Tk</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {status === 'Approved' ? (
          <p className="text-green-600 ml-4 font-semibold">Approved</p>
        ) : (
          <p
            onClick={() => handleMakeContactRequest(_id)}
            className="text-gray-700 hover:text-pink-400 text-lg ml-10 p-2 rounded-lg cursor-pointer w-[35px] bg-purple-300 whitespace-no-wrap"
          >
           <VscGitPullRequestGoToChanges />

          </p>
        )}
      </td>
      <td onClick={() => handleContactRequestInfoDelete(_id,name)} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span className="relative text-red-600 text-lg cursor-pointer inline-block px-3 py-1  leading-tight">
          <RiDeleteBinLine />
        </span>
      </td>
    </tr>
    );
};

export default ApprovedContactReqData;