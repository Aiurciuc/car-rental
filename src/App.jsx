import { useQuery } from "@tanstack/react-query";
import { mapCarsResponse } from "./utils/carsMapping";
import CarsAvailable from "./pages/CarsAvailable/CarsAvailable";
import { Routes, Route } from "react-router";
import CarDetails from "./pages/CarDetails/CarDetails";
import NotFound from "./pages/NotFound/NotFound";
import styles from "./App.module.scss";

function App() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://ajaxgeo.cartrawler.com/ctabe/cars.json")
        .then((res) => res.json())
        .then((response) => mapCarsResponse(response)),
    staleTime: Infinity,
  });

  const { cars, legend } = data || {};

  console.log(data);

  if (isLoading)
    return (
      <section className={styles.messageSection}>
        <h1 className="title-XL">Loading...</h1>
      </section>
    );

  if (error)
    return (
      <section className={styles.messageSection}>
        <h1 className="title-XL">Error: {error.message}</h1>
      </section>
    );

  return (
    <Routes>
      <Route path="/" element={<CarsAvailable legend={legend} cars={cars} />} />
      <Route path="/car/:id" element={<CarDetails cars={cars} />} />

      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
