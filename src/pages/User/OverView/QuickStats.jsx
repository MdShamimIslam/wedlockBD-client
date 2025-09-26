const QuickStats = ({stats=[]}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats?.map((item, i) => (
            <div  
              key={i}
              className="bg-white rounded-2xl p-6 shadow-md border transition"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">{item.title}</p>
                  <p className="text-xl md:text-2xl font-bold text-gray-800">{item.value}</p>
                </div>
                <item.icon className={`h-6 w-6 md:h-8 md:w-8 ${item.color}`} />
              </div>
            </div>
          ))}
        </div>
  )
}

export default QuickStats;