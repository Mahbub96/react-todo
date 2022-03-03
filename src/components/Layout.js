import React, { useState } from "react";
import TodoTable from "./TodoTable";
const styles = {
  margin: "8px",
};
function Layout() {
  const [localTask, setLocalTask] = useState({});
  const [task, setTask] = useState([
    {
      name: "meeting 1",
      time: "at 10am",
    },
    {
      name: "meeting 2",
      time: "at 1pm",
    },
    {
      name: "meeting 3",
      time: "at 4pm",
    },
  ]);

  const handleChange = (e) => {
    setLocalTask({ ...localTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(localTask, task);
    let value = [...task];
    value = localTask;
    console.log(value);
    setTask(value);
    task.push(value);
    console.log(task);
  };

  return (
    <>
      <h2>Todo application </h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "block",
          border: "1px solid black",
        }}
      >
        <input
          style={styles}
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Enter a new Task"
        />
        <br />
        <input
          type="text"
          placeholder="when"
          name="time"
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <TodoTable tasks={task} />
    </>
  );
}

export default Layout;
