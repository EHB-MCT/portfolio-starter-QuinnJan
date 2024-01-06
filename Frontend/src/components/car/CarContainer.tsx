import { useEffect, useState } from "react";
import { Store } from "../../pages/store";
import { CarAttributes } from "../../utilities/types";
import { fetchCars, deleteCar } from "../../services/car-api-services";

// Handles the fetching of list cars and the delete function

const StoreContainer = () => {
  const [storeItems, setStoreItems] = useState<CarAttributes[]>([]);

  useEffect(() => {
    fetchCars()
      .then((storeItems) => setStoreItems(storeItems))
      .catch(() => alert("Could not fetch cars"));
  }, []);

  const handleDelete = (id: number) => {
    deleteCar(id)
      .then(() =>
        setStoreItems((prevItems) => prevItems.filter((item) => item.id !== id))
      )
      .catch(() => {
        alert("Could not delete car");
      });
  };

  return (
    <Store
      storeItems={storeItems}
      onDelete={handleDelete}
      onAddCar={function (): void {
        throw new Error("Function not implemented.");
      }}
    />
  );
};

export default StoreContainer;
