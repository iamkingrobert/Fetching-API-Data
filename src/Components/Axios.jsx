import { useEffect, useState } from "react";
import axios from "axios";

function Axios() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setRecords(res.data);
    });
  }, []);

  return (
    <div>
      {records.length > 0 ? (
        <ul>
          {records.map((list) => (
            <li key={list.id}>
              {list.id} | {list.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>No Records Available</p>
      )}
    </div>
  );
}

export default Axios;
