const SectionUnderDevelopment = ({
    title,
    emoji = "⚙️",
    subtitle,
    gradientFrom = "from-purple-700",
    gradientTo = "to-indigo-600",
    glowFrom = "from-purple-300",
    glowVia = "via-indigo-400",
    glowTo = "to-blue-700",
    accentColor = "text-blue-100",
    }) => {

  return (
    <div
      className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-2xl p-6 text-white relative overflow-hidden mt-3`}
    >
      {/* Animated subtle background */}
      <div
        className={`absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] ${glowFrom} ${glowVia} ${glowTo} animate-pulse`}
      ></div>

      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
          {emoji} {title}
        </h3>
        <p className={`${accentColor} mb-3`}>{subtitle}</p>

        <div className="mt-4 bg-white/15 border border-white/20 rounded-lg p-4 backdrop-blur-sm">
          <h4 className="text-lg font-semibold mb-1">🚧 Under Development</h4>
          <p className={`text-sm ${accentColor} leading-relaxed`}>
            This section is still in progress. You can preview possible
            configurations, but modifying any values will{" "}
            <span className="font-semibold text-white">not apply changes</span>{" "}
            yet.
          </p>
          <p className={`text-xs ${accentColor} mt-2`}>
            Upcoming updates will enable full functionality soon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionUnderDevelopment;
