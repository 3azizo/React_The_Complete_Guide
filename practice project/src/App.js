import React, { useState } from "react";
import InputForm from "./components/InputForm";
import DataList from "./components/DataList";
function App() {
  const [allData, setAllData] = useState([]);
  const getdataHand = (uName, uAge) => {
    let dataObject = {
      id: Date.now(),
      name: uName,
      age: uAge,
    };
    allData.push(dataObject);
    setAllData([...allData]);
    // setAllData((prevUsers) => {
    //   return [...prevUsers, dataObject];
    // });
  };
  return (
    <div>
      <InputForm onGetData={getdataHand} />
      <DataList users={allData} />
    </div>
  );
}

export default App;
