import { Buyer } from "../utilities/types";

/**
 * @input void/no parameters
 * @description makes a request to my express rest API
 * @returns a list of all existing buyers
 */
export const fetchBuyers = (): Promise<Buyer[]> => {
  return fetch("http://localhost:5000/api/buyers").then((res) => res.json());
};

/**
 * @param id - the ID of the buyer to be deleted
 * @description deletes a buyer with the specified ID
 * @returns void
 */
export const deleteBuyerById = (id: number): Promise<void> => {
  const deleteEndpoint = `http://localhost:5000/api/buyers/${id}`;

  return fetch(deleteEndpoint, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    console.log(`Buyer with ID ${id} has been successfully deleted.`);
  });
};

/**
 * @input firstName, lastName, email & phonenumber
 * @description makes a POST request to my express rest API
 * @returns a new buyer
 */
export const addBuyer = async (
  buyerData: Omit<Buyer, "id">
): Promise<Buyer> => {
  try {
    const response = await fetch("http://localhost:5000/api/buyers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(buyerData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const newBuyer = await response.json();
    return newBuyer;
  } catch (error) {
    console.error("Error adding buyer:", error);
    throw error;
  }
};

/**
 * @input to update: firstName, lastName, email & phonenumber
 * @description makes a PUT request to my express rest API
 * @returns an updated buyer
 */
export const updateBuyer = async (
  id: number,
  updatedBuyerData: Partial<Buyer>
): Promise<Buyer> => {
  try {
    const response = await fetch(`http://localhost:5000/api/buyers/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBuyerData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const updatedBuyer = await response.json();
    return updatedBuyer;
  } catch (error) {
    console.error(`Error updating buyer with ID ${id}:`, error);
    throw error;
  }
};
