import Layout from "../../components/shared/Layout/Layout";
import styles from "./CarDetails.module.scss";
import { Card } from "../../components/shared/Card/Card";
import { Navigate, useNavigate, useParams } from "react-router";
import Button from "../../components/shared/Button/Button";

function CarDetails({ cars }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const foundCar = cars?.find((car) => car.id === id);

  if(!foundCar) {
    return <Navigate to="/not-found" replace />
  }
  const {
    pictureURL,
    vehMakeModel,
    fuelType,
    transmissionType,
    passengerQuantity,
    baggageQuantity,
    doorCount,
    airConditionInd,
    vendor,
    price,
  } = foundCar;

  return (
    <Layout>
      <Card.Root
        className={styles.card}
      >
        <Card.Header
          fontClass="title-M"
          title={vehMakeModel.name}
        ></Card.Header>
        <Card.Content>
          {pictureURL && (
            <img
              src={pictureURL}
              alt={vehMakeModel.name}
              className={styles.carImage}
            />
          )}
          <dl className={styles.infoSection}>
            <div className={styles.detailRow}>
              <dt>Vendor:</dt> <dd>{vendor.name}</dd>
            </div>
            <div className={styles.detailRow}>
              <dt>Fuel:</dt> <dd>{fuelType}</dd>
            </div>
            <div className={styles.detailRow}>
              <dt>Transmission:</dt> <dd>{transmissionType}</dd>
            </div>
            <div className={styles.detailRow}>
              <dt>Passengers:</dt> <dd>{passengerQuantity}</dd>
            </div>
            <div className={styles.detailRow}>
              <dt>Bags:</dt> <dd>{baggageQuantity}</dd>
            </div>
            <div className={styles.detailRow}>
              <dt>Doors:</dt> <dd>{doorCount}</dd>
            </div>
            <div className={styles.detailRow}>
              <dt>Air Conditioning:</dt>{" "}
              <dd>{airConditionInd ? "Yes" : "No"}</dd>
            </div>
            <div className={styles.detailRow}>
              <dt>Price:</dt>
              <dd>
                {price.estimatedTotalAmount} {price.currencyCode}
              </dd>
            </div>
          </dl>
        </Card.Content>
        <Card.Footer>
          <div className={styles.buttons}>
            <Button inverted={true} onClick={() => navigate(`/`)}>
              Back
            </Button>
            <Button onClick={() => console.log(`Car ${vehMakeModel.name} was reserved`)}>Reserve</Button>
          </div>
        </Card.Footer>
      </Card.Root>
    </Layout>
  );
}

export default CarDetails;
