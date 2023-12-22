import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { addBuyer } from "../../services/buyer-api-services";

interface AddBuyerFormProps {
  show: boolean;
  onHide: () => void;
  onAdd: (newBuyer: unknown) => void;
  onUpdate?: (id: number) => void;
  buyer?: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phonenumber: string;
  };
}

export function AddBuyerForm({
  show,
  onHide,
  onAdd,
  buyer: initialBuyer,
}: AddBuyerFormProps) {
  const [firstName, setFirstName] = useState(initialBuyer?.firstName || "");
  const [lastName, setLastName] = useState(initialBuyer?.lastName || "");
  const [email, setEmail] = useState(initialBuyer?.email || "");
  const [phonenumber, setPhoneNumber] = useState(
    initialBuyer?.phonenumber || ""
  );

  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhoneNumber(event.target.value);
  };

  const handleAddBuyer = async () => {
    try {
      const newBuyer = await addBuyer({
        firstName,
        lastName,
        email,
        phonenumber,
      });

      onAdd(newBuyer);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneNumber("");
      onHide();
    } catch (error) {
      console.error("Error creating buyer:", error);
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Create Buyer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter first name"
              value={firstName}
              onChange={handleFirstNameChange}
            />
          </Form.Group>
          <Form.Group controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter last name"
              value={lastName}
              onChange={handleLastNameChange}
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={handleEmailChange}
            />
          </Form.Group>
          <Form.Group controlId="formPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter phone number"
              value={phonenumber}
              onChange={handlePhoneNumberChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleAddBuyer}>
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
