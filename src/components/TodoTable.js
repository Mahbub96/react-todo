import React from "react";
import { Table } from "react-bootstrap";

function TodoTable({ tasks }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <Table striped bordered hover border="1" cellPadding="8px ">
        <thead>
          <tr>
            <th>Task</th>
            <th>Time</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, i) => {
            return (
              <tr key={i}>
                <td>{task.name} </td>
                <td>{task.time}</td>
                <td>delete edit</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default TodoTable;
