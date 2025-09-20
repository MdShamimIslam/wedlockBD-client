const TPagination = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between my-10 space-y-4 md:space-y-0">
      <p className="text-sm text-slate-600"> Showing 1 to 10 of 100 entries </p>
      <div className="flex gap-2 md:gap-0 sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">
        <div className="flex items-center space-x-2 mt-3 md:mt-0">
          <p className="text-sm text-slate-600">Display</p>
          <select className="text-sm text-slate-900 border border-gray-300 rounded-md h-9 px-2 outline-none">
            <option>10</option>
            <option>20</option>
            <option>50</option>
            <option>100</option>
          </select>
        </div>
        <ul className="flex justify-center items-center space-x-2 sm:space-x-3">
          <li className="flex items-center justify-center shrink-0 bg-gray-100 w-9 h-9 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 fill-gray-400"
              viewBox="0 0 55.753 55.753"
            >
              <path d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z" />
            </svg>
          </li>
          <li className="flex items-center justify-center shrink-0 bg-blue-500 border border-blue-500 cursor-pointer text-sm font-medium text-white px-3 h-9 rounded-md">
            1
          </li>
          <li className="flex items-center justify-center shrink-0 border border-gray-300 hover:border-blue-500 cursor-pointer text-sm font-medium text-slate-900 px-3 h-9 rounded-md">
            2
          </li>
          <li className="flex items-center justify-center shrink-0 border border-gray-300 hover:border-blue-500 cursor-pointer text-sm font-medium text-slate-900 px-3 h-9 rounded-md">
            3
          </li>
          <li className="flex items-center justify-center shrink-0 border border-gray-300 hover:border-blue-500 cursor-pointer text-sm font-medium text-slate-900 px-3 h-9 rounded-md">
            4
          </li>
          <li className="flex items-center justify-center shrink-0 border border-gray-300 hover:border-blue-500 cursor-pointer w-9 h-9 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 fill-gray-400 rotate-180"
              viewBox="0 0 55.753 55.753"
            >
              <path d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z" />
            </svg>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TPagination;
