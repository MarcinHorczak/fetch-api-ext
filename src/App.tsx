import { useState } from "react";

import "./App.css";

const API_URL = "https://catfact.ninja/fact";

const App = () => {
  const [data, setData] = useState(null);

  const onApiFetch = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();

    setData(data);
  };

  return (
    <div className="app">
      <h1>Fetch API Ext.</h1>
      {data ? (
        JSON.stringify(data)
      ) : (
        <button onClick={onApiFetch}>Fetch data</button>
      )}
    </div>
  );
};

export default App;
