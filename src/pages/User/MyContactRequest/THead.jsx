import { Calendar, CheckCircle, Hash, Mail, Phone, User } from "lucide-react";
import useBio from "../../../hooks/useBio";


const THead = () => {
  const {bio} = useBio();
  
  const tHeadOfUserContact = [
    { icon: User, title: "Full Name" },
    { icon: Hash, title: "Biodata ID" },
    { icon: Mail, title: "Email" },
    { icon: Phone, title: "Number" },
    { icon: Calendar, title: "Request Date" },
    ...(bio?.premium_status === false ? [{ icon: CheckCircle, title: "Status" }] : [])
  ];

  return (
    <thead className="bg-gray-50 whitespace-nowrap">
          <tr>
            {tHeadOfUserContact.map((item, index) => (
              <th
                key={index}
                className="px-4 py-3 text-left text-sm font-medium text-slate-600"
              >
                <div className="flex items-center">
                  <item.icon className={`w-4 h-4 md:w-5 md:h-5 ${item.color}`} />
                  <span className="ml-2 font-bold">{item.title}</span>
                </div>
              </th>
            ))}
          </tr>
    </thead>
  )
}

export default THead;