import { Modal1 } from '../../../component/Modal1';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const SuccessMarriedTable = ({story}) => {
  const axiosSecure = useAxiosSecure();
  const {selfNumber,partnerNumber,post_date,marriage_date} = story;
  const originalDate = new Date(post_date)
  const options = { day: "numeric", month: "numeric", year: "numeric" };
  // Format the date
  const formattedDate = originalDate.toLocaleDateString("en-GB", options);

  const {data} = useQuery({
    queryKey:['data',selfNumber],
    queryFn: async()=> {
      const res = await axiosSecure(`male-biodataId?selfNumber=${selfNumber}`);
      return res.data;
    }
  })
  const {data:data2={}} = useQuery({
    queryKey:['data2',partnerNumber],
    queryFn:async()=>{
      const res = await axiosSecure(`female-biodataId?partnerNumber=${partnerNumber}`);
      return res.data;
    }
  })

    return (
        <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap ml-8">{data?.biodata_id}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap ml-8">{data2?.biodata_id}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{formattedDate}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{marriage_date}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
       <Modal1 story={story}></Modal1>
      </td>
      
      
    </tr>
    );
};

export default SuccessMarriedTable;