const TableHead = ({headOptions = []}) => {
  return (
    <thead className="bg-gray-50 whitespace-nowrap">
          <tr>
            {headOptions?.map((item, index) => (
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

export default TableHead;