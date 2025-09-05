import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import SuccessMarriedTable from './SuccessMarriedTable';
import { useQuery } from '@tanstack/react-query';

const SuccessMarried = () => {
    const axiosSecure = useAxiosSecure();
    
    const { data: stories = [] } = useQuery({
      queryKey: ["successStories"],
      queryFn: async () => {
        const res = await axiosSecure.get('/successStories');
        return res.data;
      },
    });

    return (
        <div>
        <Helmet>
          <title> Success Married Story | WedlockBD</title>
        </Helmet>
        <div className="w-3/4 mx-auto px-4 sm:px-8">
          <div className="py-8">
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                       Male Biodata id
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Female Biodata id
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Post Date
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Married Date
                      </th>
                      
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                       Action view
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {stories?.map((story) => (
                      <SuccessMarriedTable
                        key={story._id}
                        story={story}
                      ></SuccessMarriedTable>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SuccessMarried;