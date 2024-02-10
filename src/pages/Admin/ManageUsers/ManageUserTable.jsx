import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { RiAdminFill } from "react-icons/ri";
import { MdWorkspacePremium } from "react-icons/md";

const ManageUserTable = ({
  user,
  handleMakeAdmin,
  handleMakePremium,
  handleDeleteUser,
}) => {
  const { _id, name, email,status } = user;

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{name}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{email}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {user?.role === "Admin" ? (
          <p className="ml-4 font-semibold text-green-600">Admin</p>
        ) : (
          <p
            onClick={() => handleMakeAdmin(_id)}
            className="text-gray-700 hover:text-pink-400 text-lg ml-6 p-2 rounded-lg cursor-pointer w-[35px] bg-purple-300 whitespace-no-wrap"
          >
            <RiAdminFill />
          </p>
        )}
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {status === true ? (
          <p className="text-green-600 ml-4 font-semibold">Approved</p>
        ) : (
          <p
            onClick={() => handleMakePremium(email)}
            className="text-gray-700 hover:text-pink-400 text-lg ml-6 p-2 rounded-lg cursor-pointer w-[35px] bg-purple-300 whitespace-no-wrap"
          >
            <MdWorkspacePremium />
          </p>
        )}
      </td>
      <td
        onClick={() => handleDeleteUser(_id, name)}
        className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
      >
        <span className="relative bg-blue-300  text-red-400 hover:text-red-700 text-lg rounded-lg  cursor-pointer inline-block p-2  leading-tight">
          <RiDeleteBinLine />
        </span>
      </td>
    </tr>
  );
};

export default ManageUserTable;
