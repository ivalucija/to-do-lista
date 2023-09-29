import "./App.css";
import React, { useState } from "react";
import ButtonGroup from "./ButtonGroup";
import InputGroup from "./InputGroup";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [allTasks, setAllTasks] = useState([]);
  const [activeTasks, setActiveTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("All");

  const handleAddTask = (task) => {
    setAllTasks([...allTasks, task]);
    setActiveTasks([...activeTasks, task]);
  };

  const handleFilter = (filter) => {
    setCurrentFilter(filter);
  };

  return (
    <div>
      <h1 id="h1" style={{ color: "gray" }}>
        My tasks
      </h1>
      <ButtonGroup handleFilter={handleFilter} />
      <br />
      <br />
      <InputGroup handleAddTask={handleAddTask} />

      <div id="ListaAll">
        {currentFilter === "All" &&
          allTasks.map((task, index) => (
            <div key={index}>
              <input type="checkbox" name="lista" id={index} />
              <label htmlFor={index}>{task}</label>
              <br />
            </div>
          ))}
      </div>
      <div id="ListaActive">
        {currentFilter === "Active" &&
          activeTasks.map((task, index) => <div key={index}>{task}</div>)}
      </div>
      <div id="ListaCompleted">
        {currentFilter === "Completed" &&
          completedTasks.map((task, index) => <div key={index}>{task}</div>)}
      </div>

      <br />
    </div>
  );
}

export default App;
