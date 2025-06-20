import React from "react";
import Header from "./components/layout/header";
import Body from "./components/layout/body";
import "./scss/style.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Body />
      </div>
    </div>
  );
}

export default App;
