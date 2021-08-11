import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ProjectListScreen } from "./views/project-list/index";
import { TsReactTest } from "./try-use-array";

function App() {
  return (
    <div className="App">
      <ProjectListScreen></ProjectListScreen>
      <TsReactTest></TsReactTest>
    </div>
  );
}

export default App;
