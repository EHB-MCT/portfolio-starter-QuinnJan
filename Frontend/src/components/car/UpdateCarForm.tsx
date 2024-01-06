import { Modal, Button } from "react-bootstrap";
import { UpdateCar } from "./UpdateCar";
import { UpdateCarFormProps } from "../../utilities/types";

// Update form to update cars

export function UpdateCarForm({
  show,
  onHide,
  onUpdate,
  onCancel,
}: UpdateCarFormProps) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Update Car Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <UpdateCar onUpdate={onUpdate} onCancel={onCancel} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
