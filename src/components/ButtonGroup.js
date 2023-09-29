import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function GrupaButtona({ handleFilter }) {
  return (
    <ButtonGroup aria-label="Basic example">
      <Button variant="secondary" id="All" onClick={() => handleFilter("All")}>
        All
      </Button>
      <Button
        variant="secondary"
        id="Active"
        onClick={() => handleFilter("Active")}
      >
        Active
      </Button>
      <Button
        variant="secondary"
        id="Completed"
        onClick={() => handleFilter("Completed")}
      >
        Completed
      </Button>
    </ButtonGroup>
  );
}

export default GrupaButtona;
