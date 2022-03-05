import React from "react";
import { Table } from "react-bootstrap";
import { MdOutlineDownloadDone } from "react-icons/md";

function TodoTable({ tasks, setTask }) {
  const handleDelete = (id) => {
    setTask(tasks.filter((value) => value.id !== id));
  };

  return (
    <div className="table-container">
      <Table striped bordered hover border="1" cellPadding="8px ">
        <thead>
          <tr>
            <th>#</th>
            <th>Task</th>
            <th>Time</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, i) => {
            return (
              <tr key={i}>
                <td>{i}</td>
                <td>{task.name} </td>
                <td>{task.time}</td>
                <td>
                  <MdOutlineDownloadDone
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDelete(task.id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default TodoTable;
