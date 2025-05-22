import VehicleFeatures from "./VehicleFeatures/VehicleFeatures";
import styles from "./Vehicle.module.scss";
import { Card } from "../shared/Card/Card";
import Vendor from "./Vendor/Vendor";
import Button from "../shared/Button/Button";

function Vehicle({
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
  },
}) {
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
            className={styles.vehicleImage}
          />
        )}

        <VehicleFeatures
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
          <Button>Reserve</Button>
          <Button inverted={true}>Details</Button>
        </div>
      </Card.Footer>
    </Card.Root>
  );
}

export default Vehicle;
