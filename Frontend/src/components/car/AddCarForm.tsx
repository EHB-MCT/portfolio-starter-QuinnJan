import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import {
  AddCarFormProps,
  CarBrand,
  carBrandImageMap,
} from "../../utilities/types";
import { addCar } from "../../services/car-api-services";

// Handles the adding of new cars with form

export function AddCarForm({ show, onHide, onAdd, onCancel }: AddCarFormProps) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [brand, setBrand] = useState<CarBrand>("BMW");
  const [price, setPrice] = useState("");
  const [buyerId, setBuyerId] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setType(e.target.value);
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPrice(e.target.value);
  const handleBuyerIdChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setBuyerId(e.target.value);

  const handleAddCar = async () => {
    try {
      const newCar = await addCar({
        name,
        type,
        brand,
        price: Number(price),
        buyerId: Number(buyerId),
      });

      onAdd(newCar);
    } catch (error) {
      console.error("Error adding car:", error);
    }

    setName("");
    setType("");
    setBrand("BMW");
    setPrice("");
    setBuyerId("");
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Car</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={handleNameChange}
            />
          </Form.Group>
          <Form.Group controlId="formType">
            <Form.Label>Type</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter type"
              value={type}
              onChange={handleTypeChange}
            />
          </Form.Group>
          <Form.Group controlId="formType">
            <Form.Label>Brand</Form.Label>
            <Form.Select
              placeholder="Enter brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value as CarBrand)}
            >
              {Object.keys(carBrandImageMap).map((brand) => (
                <option value={brand}>{brand}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group controlId="formPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter price"
              value={price}
              onChange={handlePriceChange}
            />
          </Form.Group>
          <Form.Group controlId="formBuyerId">
            <Form.Label>Buyer ID</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter buyer ID"
              value={buyerId}
              onChange={handleBuyerIdChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleAddCar}>
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
