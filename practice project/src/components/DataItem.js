const DataItem = (props) => {
  return (
    <li className="data-item">
      <span>{props.userName}</span>
      <span> ({props.age}) years Old</span>
    </li>
  );
};
export default DataItem;
