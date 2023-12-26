import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { updateBuyer } from "../../services/buyer-api-services";
import { Buyer } from "../../utilities/types";

interface UpdateBuyerFormProps {
  show: boolean;
  onHide: () => void;
  onUpdate: (updatedBuyer: unknown) => void;
  buyer: Buyer;
}

export function UpdateBuyerForm({
  show,
  onHide,
  onUpdate,
  buyer,
}: UpdateBuyerFormProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");

  useEffect(() => {
    if (buyer) {
      setFirstName(buyer.firstName);
      setLastName(buyer.lastName);
      setEmail(buyer.email);
      setPhoneNumber(buyer.phonenumber);
    }
  }, [buyer]);

  const handleFirstNameChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPhoneNumber(event.target.value);
  };

  // UPDATE buyer
  const handleUpdateBuyer = async () => {
    try {
      const updatedBuyer = await updateBuyer(buyer.id, {
        firstName,
        lastName,
        email,
        phonenumber,
      });

      onUpdate(updatedBuyer);
      onHide();
    } catch (error) {
      console.error("Error updating buyer:", error);
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Update Buyer</Modal.Title>
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
        <Button variant="primary" onClick={handleUpdateBuyer}>
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
