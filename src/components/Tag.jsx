const Tag = ({ icon, tag, date, bg }) => {
  return (
    <div className="flex items-center gap-4">
      <div
        className={`${bg} items-center gap-1 inline-flex text-white p-2 rounded-md`}
      >
        {icon}
        <span className="text-[10px]">{tag}</span>
      </div>
      <div className="w-4 h-[2px] bg-gray-500"></div>
      <p className="text-sm font-semibold">{date}</p>
    </div>
  );
};

export default Tag;
