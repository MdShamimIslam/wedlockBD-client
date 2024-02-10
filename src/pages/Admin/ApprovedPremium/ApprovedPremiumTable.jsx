import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdWorkspacePremium } from "react-icons/md";

const ApprovedPremiumTable = ({
  premium,
  handleMakePremium,
  handlePremiumInfoDelete,
}) => {
  const { _id, name, biodata_id, contact_email ,status} = premium;
  
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{name}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
        <p className="text-gray-900 ml-6 whitespace-no-wrap">{biodata_id}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{contact_email}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {
          status === true ? <p className="text-green-600 ml-4 font-semibold">Approved</p>
           : 
           <p
           onClick={() => handleMakePremium(contact_email)}
           className="text-gray-700 hover:text-pink-400 text-lg ml-6 p-2 rounded-lg cursor-pointer w-[35px] bg-purple-300 whitespace-no-wrap"
         >
           <MdWorkspacePremium />
         </p>
        }
        
      </td>
      <td
        onClick={() => handlePremiumInfoDelete(_id, name)}
        className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
      >
        <span className="relative text-red-600 text-lg cursor-pointer inline-block px-3 py-1  leading-tight">
          <RiDeleteBinLine />
        </span>
      </td>
    </tr>
  );
};

export default ApprovedPremiumTable;
