import React from "react";
import { employee } from "./data/data";
function App() {
  return (
    <div>
      <h1> Employees ({employee.length})</h1>
      {employee.map((emp) => (
        <p>{emp}</p>
      ))}
    </div>
  );
}

export default App;
