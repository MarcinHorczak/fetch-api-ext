import { useState } from "react";

import "./App.css";

const API_URL = "https://catfact.ninja/fact";

type Data = {
  fact: string;
  length: number;
};

const App = () => {
  const [data, setData] = useState<Data | null>(null);

  const onApiFetch = async () => {
    const response = await fetch(API_URL);
    const data: Data = await response.json();

    setData(data);
  };

  return (
    <div className="app">
      <h1>Fetch API Ext.</h1>
      {data ? (
        <>
          <button onClick={onApiFetch}>Fetch data again</button>
          <div className="data">
            <h3>{data.fact}</h3>
            <h4>Length: {data.length}</h4>
          </div>
        </>
      ) : (
        <button onClick={onApiFetch}>Fetch data</button>
      )}
    </div>
  );
};

export default App;
