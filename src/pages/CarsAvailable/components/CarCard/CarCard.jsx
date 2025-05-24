import styles from "./CarCard.module.scss";
import Vendor from "../Vendor/Vendor";
import CarFeatures from "../CarFeatures/CarFeatures";
import {Card} from "../../../../components/shared/Card/Card";
import Button from "../../../../components/shared/Button/Button";
import { useNavigate } from "react-router";

function CarCard({
  car: {
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
    id,
  },
}) {
  const navigate = useNavigate();

  return (
    <Card.Root>
      <Card.Header title={vehMakeModel.name}>
        <Vendor vendor={vendor.name} />
      </Card.Header>

      <Card.Content>
        {pictureURL && (
          <img
            src={pictureURL}
            alt={vehMakeModel.name}
            className={styles.carImage}
          />
        )}

        <CarFeatures
          bag={baggageQuantity}
          fuel={fuelType}
          door={doorCount}
          person={passengerQuantity}
          snowflake={airConditionInd}
          transmission={transmissionType}
        />
      </Card.Content>

      <Card.Footer>
        <div className={styles.priceContainer}>
          <span className={`subtitle-L ${styles.price}`}>
            {price.estimatedTotalAmount}
          </span>
          <span className="body-S">{price.currencyCode}</span>
        </div>
        <div className={styles.buttons}>
          <Button inverted={true} onClick={() => navigate(`/car/${id}`)}>Details</Button>
          <Button onClick={() => console.log(`Car ${vehMakeModel.name} was reserved`)}>Reserve</Button>
        </div>
      </Card.Footer>
    </Card.Root>
  );
}

export default CarCard;
