import { useMemo, useState } from "react";
import { defaultVehicleSorting } from "./constants/vehicleSortOptions";
import styles from "./CarsAvailable.module.scss";
import Layout from "../../components/shared/Layout/Layout";
import Legend from "../../components/Legend/Legend";
import CarsOptions from "./components/CarsOptions/CarsOptions";
import CarCard from "./components/CarCard/CarCard";
import { sortCars } from "./utils/sortCars";

function CarsAvailable({legend, cars }) {
  const [sortBy, setSortBy] = useState(defaultVehicleSorting);

  const carsList = useMemo(() => sortCars(cars, sortBy), [cars, sortBy]);

  function handleSortChange(newSortBy) {
    setSortBy(newSortBy);
  }

  return (
    <Layout>
      
        
          <Legend
            pickUpDateTime={legend.pickUpDateTime}
            pickUpLocation={legend.pickUpLocation.name}
            returnDateTime={legend.returnDateTime}
            returnLocation={legend.returnLocation.name}
          />
          <CarsOptions sortBy={sortBy} onSortChange={handleSortChange} />

          <section className={styles.body}>
            {carsList.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </section>
    </Layout>
  );
}

export default CarsAvailable;
