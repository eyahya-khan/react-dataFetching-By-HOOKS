import React from "react";
import "./App.css";
import Datafetching from "./components/Datafetching";
import DataFetchById from "./components/DataFetchById";
import DataFetchByClick from "./components/DataFetchByClick";

function App() {
  return (
    <div className="App">
      {/* <Datafetching /> */}
      {/* <DataFetchById /> */}
      <DataFetchByClick />
    </div>
  );
}

export default App;
