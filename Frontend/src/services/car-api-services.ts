import { CarAttributes } from "../utilities/types";

/**
 * @input void/no parameters
 * @description makes a request to my express rest API
 * @returns a list of all available cars
 */
export const fetchCars = (): Promise<CarAttributes[]> => {
  return fetch("http://localhost:5000/api/cars").then((res) => res.json());
};

/**
 * @param id - the ID of the car to be deleted
 * @description deletes a car with the specified ID
 * @returns void
 */
export const deleteCar = (id: number): Promise<void> => {
  return fetch(`http://localhost:5000/api/cars/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    })
    .catch((error) => {
      console.error(`Error deleting car with ID ${id}:`, error);
      throw error;
    });
};

/**
 * @input name, type, brand, price & buyerid
 * @description adds a car, through API call, with the specified information
 * @returns new car
 */
export const addCar = async (
  carData: Omit<CarAttributes, "id">
): Promise<CarAttributes> => {
  try {
    const response = await fetch("http://localhost:5000/api/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(carData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const newCar = await response.json();
    return newCar;
  } catch (error) {
    console.error("Error adding car:", error);
    throw error;
  }
};
