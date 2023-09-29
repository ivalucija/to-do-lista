import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import React, { useState } from "react";

function Unos1({ handleAddTask }) {
  const [task, setTask] = useState("");

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleClick = () => {
    if (task.trim() !== "") {
      handleAddTask(task);
      setTask("");
    }
  };
  return (
    <>
      <InputGroup id="Box">
        <Form.Control
          placeholder="Add tasks..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={task}
          onChange={handleChange}
        />
        <Button variant="outline-secondary" id="Add" onClick={handleClick}>
          Add
        </Button>
      </InputGroup>
    </>
  );
}

export default Unos1;
