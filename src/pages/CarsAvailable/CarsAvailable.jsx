import { useMemo } from "react";
import { defaultCarsSorting } from "./constants/carsSortOptions";
import styles from "./CarsAvailable.module.scss";
import Legend from "./components/Legend/Legend";
import CarsOptions from "./components/CarsOptions/CarsOptions";
import CarCard from "./components/CarCard/CarCard";
import { sortCars } from "./utils/sortCars";
import { useLocalStoredState } from "../../hooks/useLocalStoredState";

function CarsAvailable({ legend, cars }) {
  const [sortBy, setSortBy] = useLocalStoredState('carSorting', defaultCarsSorting);

  const carsList = useMemo(() => sortCars(cars, sortBy), [cars, sortBy]);

  function handleSortChange(newSortBy) {
    setSortBy(newSortBy);
  }

  return (
    <>
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
    </>
  );
}

export default CarsAvailable;
