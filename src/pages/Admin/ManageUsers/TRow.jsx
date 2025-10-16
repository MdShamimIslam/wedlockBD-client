import { ShieldCheck, Trash2 } from "lucide-react";
import { tdClases } from "../../../utils/options";

const TRow = ({user, handleMakeAdmin, handleDeleteUser}) => {
    const {_id, name, email, image, role = ''} = user || {};

    return (
        <tr>
            <td  className={tdClases}>
                <img
                    src={image}
                    alt={name}
                    className="w-9 h-9 rounded-full shrink-0"
                />
            </td>
            <td  className={tdClases}> {name} </td>
            <td className={tdClases}>{email}</td>
            <td className={tdClases}>
                {role === 'admin' ? <span className="text-purple-600 bg-purple-100 py-1 px-4 rounded-full">Admin</span> : 
                <button
                    type="button"
                    onClick={() => handleMakeAdmin(_id)}
                    className="flex items-center gap-2 rounded-lg text-purple-600 bg-purple-50 border border-purple-200 px-3 py-1 hover:bg-purple-100 transition-colors duration-200"
                >
                    <ShieldCheck className="w-4 h-4" />
                    Make Admin
                </button> }
                
            </td> 
            <td className={`${tdClases}`}>
                <button
                    type="button"
                    onClick={() => handleDeleteUser(_id, name)}
                    className="flex items-center gap-2 rounded-lg text-red-600 bg-red-50 border border-red-200 px-3 py-1 hover:bg-red-100 transition-colors duration-200"
                >
                    <Trash2 className="w-4 h-4" />
                    Delete
                </button> 
            </td>
        </tr>
    )
}

export default TRow;