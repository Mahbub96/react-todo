import React, { useState } from "react";

const styles = {
  margin: "8px",
};

function InputFrom({ setTask, task }) {
  const [todo, setTodo] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo.length || !time.length) return;

    setTask([...task, { id: task[task.length - 1].id + 1, name: todo, time }]);

    setTodo("");
    setTime("");
  };

  return (
    <div>
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
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          placeholder="Enter a new Task"
        />
        <br />
        <input
          value={time}
          type="text"
          placeholder="when"
          onChange={(e) => setTime(e.target.value)}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default InputFrom;
