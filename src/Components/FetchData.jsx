import { useEffect, useState } from "react";

function FetchData() {
  // Using the 'useState' hook to declare a state variable 'records' and a function 'setRecords'
  const [records, setRecords] = useState([]);

  // Using 'useEffect' hook to perform side effects in the component
  useEffect(() => {
    // Fetching data from a JSON API endpoint using the 'fetch' function
    fetch("https://jsonplaceholder.typicode.com/users")
      // Handling the response by parsing it as JSON
      .then((response) => response.json())
      // Here I Update the 'records' state with the fetched data
      .then((data) => setRecords(data))
      // Handling errors / logging the err to console
      .catch((error) => console.log(error));
  }, []); // The empty dependency array ensures the effect runs only once after the initial render

  return (
    <div>
      <ul>
        {records.map((list, index) => (
          <li key={index}>
            {list.id} | {list.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchData;
