import styles from "./App.module.scss";
import { useQuery } from "@tanstack/react-query";
import { mapCarsResponse } from "./utils/carsMapping";
import CarsAvailable from "./pages/CarsAvailable/CarsAvailable";

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
  return <>{!isLoading && <CarsAvailable legend={legend} cars={cars} />};</>;
}

export default App;
