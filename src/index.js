import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div>
        {"Identify Twitter authors' "}
        <span>top interests, professions, gender and country</span>
      </div>
      <div>
        Identify Twitter authors&apos;{" "}
        <span>top interests, professions, gender and country</span>
      </div>
      <div>
        Identify Twitter authors'{" "}
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
