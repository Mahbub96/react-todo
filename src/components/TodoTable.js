import React from "react";
import { Table } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import EditTask from "./EditTask";

function TodoTable({ tasks, setTask }) {
  const handleDelete = (id) => {
    setTask(tasks.filter((value) => (value.id === id ? null : value)));
  };
  const handleEdit = (targetTask) => {
    <EditTask targetTask={targetTask} task={tasks} setTask={setTask} />;
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
                  <AiOutlineClose onClick={() => handleDelete(task.id)} />
                  <BiEdit onClick={() => handleEdit(task)} />
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
