import React, { useState, useEffect } from "react";
import { UpdateBuyerForm } from "../../components/buyer/UpdateBuyerForm"; // Import the UpdateBuyerForm
import {
  fetchBuyers,
  deleteBuyerById,
} from "../../services/buyer-api-services";

// Handles the fetching of list buyers and the delete function

interface Buyer {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phonenumber: string;
}

const styles: Record<string, React.CSSProperties> = {
  buyersList: {
    listStyle: "none",
    padding: 0,
  },
  buyerItem: {
    margin: "12px 0",
    backgroundColor: "#f4f4f4",
    padding: "12px",
    borderRadius: "4px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buyerDetails: {
    marginBottom: "8px",
  },
  deleteButton: {
    backgroundColor: "#ff5757",
    color: "white",
    padding: "8px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  updateButton: {
    backgroundColor: "#2ecc71",
    color: "white",
    padding: "8px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginLeft: "8px",
  },
};

// Fetches and displays a list of buyers
export const BuyersList = () => {
  const [buyers, setBuyers] = useState<Buyer[]>([]);
  const [showUpdateForm, setShowUpdateForm] = useState<boolean>(false);
  const [selectedBuyer, setSelectedBuyer] = useState<Buyer | null>(null);

  // GET buyers
  const getBuyers = () => {
    fetchBuyers()
      .then((data) => {
        setBuyers(data);
      })
      .catch((error) => {
        console.error("Error fetching buyers:", error);
      });
  };

  // DELETE buyers
  const deleteBuyer = (id: number) => {
    deleteBuyerById(id)
      .then(() => {
        getBuyers();
      })
      .catch((error) => {
        console.error("Error deleting buyer:", error);
      });
  };

  const handleUpdateClick = (buyer: Buyer) => {
    setSelectedBuyer(buyer);
    setShowUpdateForm(true);
  };

  useEffect(() => {
    getBuyers();
  }, []);

  return (
    <div>
      <ul style={styles.buyersList}>
        {buyers.map((buyer) => (
          <li key={buyer.id} style={styles.buyerItem}>
            <div>
              <div style={styles.buyerDetails}>
                <strong>Name:</strong> {buyer.firstName} {buyer.lastName}
              </div>
              <div style={styles.buyerDetails}>
                <strong>Email:</strong> {buyer.email}
              </div>
              <div style={styles.buyerDetails}>
                <strong>Phone:</strong> {buyer.phonenumber}
              </div>
            </div>
            <div>
              <button
                onClick={() => deleteBuyer(buyer.id)}
                style={styles.deleteButton}
              >
                Delete
              </button>
              <button
                onClick={() => handleUpdateClick(buyer)}
                style={styles.updateButton}
              >
                Update
              </button>
            </div>
          </li>
        ))}
      </ul>

      {selectedBuyer && (
        <UpdateBuyerForm
          show={showUpdateForm}
          onHide={() => {
            setShowUpdateForm(false);
            setSelectedBuyer(null);
          }}
          onUpdate={(updatedBuyer: unknown) => {
            console.log("Updated buyer:", updatedBuyer);
            getBuyers();
          }}
          buyer={selectedBuyer}
        />
      )}
    </div>
  );
};
