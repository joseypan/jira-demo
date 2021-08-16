import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import { ProjectListScreen } from "./views/project-list/index";
import Login from "./views/login/index";

function App() {
  return (
    <div className="App">
      {/* <ProjectListScreen></ProjectListScreen> */}
      <Login></Login>
    </div>
  );
}

export default App;
