import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { formatCurrency } from "../../utilities/formatCurrency";
import { CarAttributes } from "../../utilities/types";
import { getImageForBrand } from "../../utilities/brandImageMapper";

export type StoreItemProps = {
  item: CarAttributes;
  onDelete: (id: number) => void;
  onAddMessage: (message: string) => void;
};

export function StoreItem({ item, onDelete, onAddMessage }: StoreItemProps) {
  const [showMessageForm, setShowMessageForm] = useState(false);
  const [message, setMessage] = useState("");

  const handleContactOwnerClick = () => {
    setShowMessageForm(true);
  };

  const handleCancelMessageClick = () => {
    setShowMessageForm(false);
  };

  const handleDeleteClick = () => {
    onDelete(item.id);
  };

  const handleAddMessage = () => {
    if (message.trim() !== "") {
      onAddMessage(message);
      setMessage("");
      setShowMessageForm(false);
    }
  };

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={getImageForBrand(item.brand)}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{item.name}</span>
          <span className="ms-2 text-muted">
            {formatCurrency(item.price)}
          </span>{" "}
        </Card.Title>
        <div className="mt-auto">
          <Button
            style={{ backgroundColor: "#3498db", borderColor: "#3498db" }}
            onClick={handleContactOwnerClick}
          >
            + Contact owner
          </Button>
          <Button
            style={{ backgroundColor: "#ff5757", borderColor: "#ff5757" }}
            variant="danger"
            onClick={handleDeleteClick}
            className="ms-2"
          >
            Delete
          </Button>
          {showMessageForm && (
            <Form onSubmit={handleAddMessage} className="mt-3">
              <Form.Control
                type="text"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <div className="mt-2">
                <Button type="submit" style={{ marginRight: "8px" }}>
                  Submit
                </Button>
                <Button
                  variant="secondary"
                  onClick={handleCancelMessageClick}
                  style={{ marginLeft: "8px" }}
                >
                  Cancel
                </Button>
              </div>
            </Form>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
