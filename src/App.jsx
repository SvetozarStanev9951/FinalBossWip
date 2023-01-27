import { useState, useEffect } from "react";

import Loader from "./components/Loader/Loader";
import AppHeading from "./components/AppHeading/AppHeading";
import Counter from "./components/Counter/Counter";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  const handleLoading = () => {
    setLoading(!loading);
  };

  const handleShowLoading = () => {
    setShowLoader(!showLoader);
  };

  return (
    <>
      <AppHeading textColor="black" bgrColor="wheat">
        Text
      </AppHeading>
      <h1>Hello World</h1>

      <button
        onClick={handleShowLoading}
        style={{
          width: "100%",
          marginBottom: "15px",
          fontSize: "22px",
          color: "black",
          backgroundColor: "white",
          border: "1px solid black",
          textTransform: "uppercase",
        }}
      >
        {showLoader ? "Hide loader" : "Show loader"}
      </button>
      {showLoader ? (
        <>
          <button
            onClick={handleLoading}
            style={{
              width: "100%",
              fontSize: "22px",
              color: "black",
              backgroundColor: "white",
              border: "1px solid black",
            }}
          >
            Toggle loading
          </button>
          <Loader isLoading={loading}>Loading...</Loader>
          <Counter />
        </>
      ) : null}
    </>
  );
}

export default App;
