import React, { useState } from "react";
import TodoTable from "./TodoTable";
import InputFrom from "./InputFrom";

function Layout() {
  let [task, setTask] = useState([
    {
      id: 0,
      name: `meeting 1`,
      time: `at 10am`,
    },
    {
      id: 1,
      name: `meeting 2`,
      time: `at 1pm`,
    },
    {
      id: 2,
      name: `meeting 3`,
      time: `at 4pm`,
    },
  ]);

  return (
    <>
      <h2>Todo application </h2>
      <InputFrom task={task} setTask={setTask} />
      <TodoTable tasks={task} setTask={setTask} />
    </>
  );
}

export default Layout;
