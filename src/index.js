import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h2>Start editing to see some magic happen!</h2>
      <div>
        Identify Twitter authors'{" "}
        <span>top interests, professions, gender and country</span>
      </div>
      <div>
        {"Identify Twitter authors' "}
        <span>top interests, professions, gender and country</span>
      </div>
      <div>
        Identify Twitter authors'
        <span>top interests, professions, gender and country</span>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
