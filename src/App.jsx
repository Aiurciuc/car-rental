import { useQuery } from "@tanstack/react-query";
import { mapCarsResponse } from "./utils/carsMapping";
import CarsAvailable from "./pages/CarsAvailable/CarsAvailable";
import { Routes, Route } from "react-router";
import CarDetails from "./pages/CarDetails/CarDetails";
import NotFound from "./pages/NotFound/NotFound";
import ReservationDetails from "./pages/ReservationDetails/ReservationDetails";
import CenteredMessage from "./components/CenteredMessage/CenteredMessage";

function App() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://ajaxgeo.cartrawler.com/ctabe/cars.json")
        .then((res) => res.json())
        .then((response) => mapCarsResponse(response)),
  });

  const { cars, legend } = data || {};

  console.log(data);

  if (isLoading) return <CenteredMessage message="Loading..." />;

  if (error) return <CenteredMessage message={`Error: ${error.message}`} />;

  return (
    <Routes>
      <Route path="/" element={<CarsAvailable legend={legend} cars={cars} />} />
      <Route path="/car/:id" element={<CarDetails cars={cars} />} />
      <Route path="/reservation" element={<ReservationDetails />} />

      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
