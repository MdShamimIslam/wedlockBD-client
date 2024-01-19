import React from 'react';
import { RiDeleteBinLine } from "react-icons/ri";

const FavoritesDataTable = ({favoriteData,handleDeleteFavoriteBio}) => {
    const {_id, name, biodata_id,permanent_division_name,occupation } = favoriteData;
    return (
       
      <tr>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{name}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 ml-6 whitespace-no-wrap">{biodata_id}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{permanent_division_name}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{occupation}</p>
        </td>
        <td onClick={()=>handleDeleteFavoriteBio(_id,name)} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span className="relative text-red-600 text-lg cursor-pointer inline-block px-3 py-1  leading-tight">
          <RiDeleteBinLine />
        </span>
        </td>
      </tr> 
    
    );
};

export default FavoritesDataTable;