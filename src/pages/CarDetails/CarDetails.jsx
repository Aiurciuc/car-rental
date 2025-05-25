import styles from "./CarDetails.module.scss";
import { Card } from "../../components/Card/Card";
import { Navigate, useNavigate, useParams } from "react-router";
import Button from "../../components/Button/Button";

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
            <div className={`body-L ${styles.detailRow}`}>
              <dt>Vendor:</dt> <dd className="semibold">{vendor.name}</dd>
            </div>
            <div className={`body-L ${styles.detailRow}`}>
              <dt>Fuel:</dt> <dd className="semibold">{fuelType}</dd>
            </div>
            <div className={`body-L ${styles.detailRow}`}>
              <dt>Transmission:</dt> <dd className="semibold">{transmissionType}</dd>
            </div>
            <div className={`body-L ${styles.detailRow}`}>
              <dt>Passengers:</dt> <dd className="semibold">{passengerQuantity}</dd>
            </div>
            <div className={`body-L ${styles.detailRow}`}>
              <dt>Bags:</dt> <dd className="semibold">{baggageQuantity}</dd>
            </div>
            <div className={`body-L ${styles.detailRow}`}>
              <dt>Doors:</dt> <dd className="semibold">{doorCount}</dd>
            </div>
            <div className={`body-L ${styles.detailRow}`}>
              <dt>Air Conditioning:</dt>
              <dd className="semibold">{airConditionInd ? "Yes" : "No"}</dd>
            </div>
            <div className={`body-L ${styles.detailRow}`}>
              <dt>Price:</dt>
              <dd className="semibold">
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
  );
}

export default CarDetails;
