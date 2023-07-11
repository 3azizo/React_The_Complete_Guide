import DataItem from "./DataItem";
import styles from "./InputForm.module.css";

const DataList = (props) => {
  return (
    <ul className={styles.card}>
      {props.users.map((data) => {
        return <DataItem key={data.id} userName={data.name} age={data.age} />;
      })}
    </ul>
  );
};
export default DataList;
