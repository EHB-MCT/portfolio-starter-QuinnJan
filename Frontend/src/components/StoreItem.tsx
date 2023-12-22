import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemAttr = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ name, price, imgUrl }: StoreItemAttr) {
  const [showForm, setShowForm] = useState(false);

  const handleContactOwnerClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setShowForm(false);
  };

  const handleCancelClick = () => {
    setShowForm(false);
  };

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          <Button onClick={handleContactOwnerClick}>+ Contact owner</Button>
          {showForm && (
            <Form onSubmit={handleFormSubmit} className="mt-3">
              <Form.Control type="text" placeholder="Enter your message" />
              <div className="mt-2">
                <Button type="submit" style={{ marginRight: "8px" }}>
                  Submit
                </Button>
                <Button
                  variant="secondary"
                  onClick={handleCancelClick}
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
