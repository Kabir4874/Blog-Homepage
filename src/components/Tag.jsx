const Tag = ({ icon, text, date, bg }) => {
  return (
    <div>
      <div className={`${bg}`}>
        {icon}
        <span>{text}</span>
      </div>
      <div></div>
      <p>{date}</p>
    </div>
  );
};

export default Tag;
