import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    // Gửi yêu cầu GET tới BACKEND
    axios
      .get("http://localhost:3001/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div>
      <h1>Data from Backend:</h1>
      <p>{data}</p>
    </div>
  );
}

export default App;
