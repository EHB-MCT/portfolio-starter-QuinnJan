import { useState } from "react";
import { Button } from "react-bootstrap";
import { BuyersList } from "../components/buyer/BuyerList";
import { AddBuyerForm } from "../components/buyer/AddBuyerForm";

export function Home() {
  const [buyersVisible, setBuyersVisible] = useState<boolean>(false);
  const [showAddBuyerForm, setShowAddBuyerForm] = useState(false);

  const handleShowAddBuyerForm = () => {
    setShowAddBuyerForm(true);
  };

  const handleHideAddBuyerForm = () => {
    setShowAddBuyerForm(false);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Admin Dashboard</h1>
      <p style={styles.description}>
        This is the admin dashboard, here you can see who is registered in the
        system and all available cars from the shop.
      </p>
      <div style={styles.buttonsContainer}>
        <button
          onClick={() => {
            setBuyersVisible((prevVisible) => !prevVisible);
          }}
          style={styles.toggleButton}
        >
          {buyersVisible ? "Hide Buyers" : "Show Buyers"}
        </button>
        <Button
          variant="secondary"
          onClick={handleShowAddBuyerForm}
          style={styles.createButton}
        >
          Create Buyer
        </Button>
      </div>
      {buyersVisible && <BuyersList />}
      <AddBuyerForm
        show={showAddBuyerForm}
        onHide={handleHideAddBuyerForm}
        onAdd={(newBuyer: unknown) => console.log("Adding buyer:", newBuyer)}
        onUpdate={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
}

const styles = {
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
  buttonsContainer: {
    display: "flex",
    marginBottom: "10px",
  },
  toggleButton: {
    marginRight: "10px",
    backgroundColor: "#3498db",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  createButton: {
    backgroundColor: "#2ecc71",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
