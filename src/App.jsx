import styles from "./App.module.scss";
import Vehicle from "./components/Vehicle/Vehicle";
import Header from "./components/Header/Header";
import Layout from "./components/shared/Layout/Layout";
import { useQuery } from "@tanstack/react-query";
import { mapCarsResponse } from "./utils/carsMapping";
import Legend from "./components/Legend/Legend";

function App() {
  const { isLoading, error, data  } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://ajaxgeo.cartrawler.com/ctabe/cars.json")
        .then((res) => res.json())
        .then((response) => mapCarsResponse(response)
        ),
  });

  const { cars, legend } = data || {};

  console.log(data);
  return (
    <>
      {/* <Header /> */}
      {!isLoading && (
        <>
          <Legend
            className={styles.legend}
            pickUpDateTime={legend.pickUpDateTime}
            pickUpLocation={legend.pickUpLocation.name}
            returnDateTime={legend.returnDateTime}
            returnLocation={legend.returnLocation.name}
          />
          <Layout className={styles.body}>
            <></>

            {cars.map((car) => (
              <Vehicle
                key={car.id}
                car={car}
              />
            ))}
          </Layout>
        </>
      )}
    </>
  );
}

export default App;
