// src/App.tsx
import React, { useState, useEffect } from "react";
import Table from "./components/TableBank";
import "./App.css";

interface Data {
  id: number;
  date: string;
  savings: number;
}

const datas: Data[] = [
  { id: 1, date: "08-10-2023", savings: 10000 },
  { id: 2, date: "09-10-2023", savings: 20000 },
  { id: 3, date: "10-10-2023", savings: 40000 },
  { id: 4, date: "11-10-2023", savings: 250000 },
];

const columns = [
  { Header: "ID", accessor: "id" },
  { Header: "date", accessor: "date" },
  { Header: "Savings", accessor: "savings" },
];

const App: React.FC = () => {
  const [data, setData] = useState<Data[]>(datas);
  // const [col] = useState(columns);
  const [newData, setNewData] = useState<Data>({ id: 0, date: "", savings: 0 });
  const [totalSavings, setTotalSavings] = useState<number>(calculateTotalSavings(datas));

  useEffect(() => {
    const storedData = localStorage.getItem("tableData");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tableData", JSON.stringify(data));
    setTotalSavings(calculateTotalSavings(data));
  }, [data]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddData = () => {
    const newDataWithId: Data = {
      ...newData,
      id: data.length + 1,
      date: newData.date,
      savings: parseInt(newData.savings, 0),
    };

    const updatedData = [...data, newDataWithId];
    setData(updatedData);
    setNewData({ id: 0, date: "", savings: 0 });

    console.log(updatedData);
    console.log(calculateTotalSavings(updatedData));
  };

  const handleDelete = (id: number) => {
    const deletedData = data.filter((item) => item.id !== id);
    setData(deletedData);
  };

  // const handleEdit = (id: number) => {
  //   const editedData = data.find((item) => item.id === id);
  //   if (editedData) {
  //     setNewData(editedData);
  //     handleDelete(id);
  //   }
  // };

  function calculateTotalSavings(dataArray: Data[]): number {
    return dataArray.reduce((total, tabungan) => total + tabungan.savings, 0);
  }

  return (
    <div>
      <h1 className="title">MaBank</h1>
      <div>
        <label>
          ID:
          <input type="number" name="id" value={newData.id} onChange={handleInputChange} />
        </label>
        <label>
          Date:
          <input type="text" name="date" value={newData.date} onChange={handleInputChange} />
          {/* <button onClick={handleDelete}>delete</button> */}
        </label>
        <label>
          Savings
          <input type="number" name="savings" value={newData.savings} onChange={handleInputChange} />
        </label>
        <button onClick={handleAddData}>Add Data</button>
      </div>
      <Table columns={columns} datas={data} onDelete={handleDelete} />
      <div>
        <p>Total savings: Rp {totalSavings}</p>
      </div>
    </div>
  );
};

export default App;
