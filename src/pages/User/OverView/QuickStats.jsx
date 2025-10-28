const QuickStats = ({ stats = [] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((item, index) => {
        const { title, value, icon: Icon, fromColor, viaColor, toColor, accentColor } = item;

        return (
          <div
            key={index}
            className={`bg-gradient-to-br ${fromColor} ${viaColor ? viaColor : ""} ${toColor} 
            rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className={`${accentColor} font-medium`}>{title}</p>
                <p className="text-3xl font-bold tracking-tight">{value}</p>
              </div>
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                <Icon className="w-7 h-7 text-white drop-shadow-md" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default QuickStats;
