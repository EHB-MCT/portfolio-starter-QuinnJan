import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { UpdateFormProps } from "../../utilities/types";

// Handles update function of cars

export function UpdateCar({ onUpdate, onCancel }: UpdateFormProps) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleUpdateClick = () => {
    onUpdate(name, parseFloat(price));
  };

  return (
    <Form>
      <Form.Group controlId="formCarName">
        <Form.Label>Car Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter car name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formCarPrice">
        <Form.Label>Car Price</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter car price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" onClick={handleUpdateClick}>
        Update
      </Button>{" "}
      <Button variant="secondary" onClick={onCancel}>
        Cancel
      </Button>
    </Form>
  );
}
