import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/car/CarItem";
import { CarAttributes, StoreProps } from "../utilities/types";
import { AddCarForm } from "../components/car/AddCarForm";

export function Store({ storeItems, onDelete, onAddCar }: StoreProps) {
  const [showAddCarForm, setShowAddCarForm] = useState(false);

  const handleAddCar = (newCar: CarAttributes) => {
    console.log("Adding new car:", newCar);
    onAddCar(newCar);
  };

  const styles = {
    createButton: {
      backgroundColor: "#2ecc71",
      color: "white",
      padding: "10px 15px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      marginBottom: "10px",
    },
    container: {
      marginLeft: "20px",
    },
    title: {
      fontSize: "24px",
      marginBottom: "10px",
    },
    description: {
      marginBottom: "20px",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Available cars</h1>
      <p style={styles.description}>
        Here's a list of all available cars from the shop.
      </p>
      <Button
        variant="primary"
        onClick={() => setShowAddCarForm(true)}
        style={styles.createButton}
      >
        Add Car
      </Button>
      <AddCarForm
        show={showAddCarForm}
        onHide={() => setShowAddCarForm(false)}
        onAdd={handleAddCar}
        onCancel={() => setShowAddCarForm(false)}
      />
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem
              item={item}
              onDelete={onDelete}
              onAddMessage={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}
