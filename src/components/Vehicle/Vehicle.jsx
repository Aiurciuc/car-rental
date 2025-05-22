import VehicleFeatures from "./VehicleFeatures/VehicleFeatures";
import styles from "./Vehicle.module.scss";
import Card from "../shared/Card/Card";

function Vehicle({
  car: {
    pictureURL,
    vehMakeModel,
    fuelType,
    transmissionType,
    passengerQuantity,
    baggageQuantity,
    doorCount,
    airConditionInd
  },
}) {
  return (
    <Card>
      {vehMakeModel.name && <h3 className={`subtitle-M` }>{vehMakeModel.name}</h3>}
      {pictureURL && (
        <img
          src={pictureURL}
          alt={vehMakeModel.name}
          className={styles.vehicleImage}
        />
      )}
      {}

      <div className={styles.cardContent}>
        <VehicleFeatures
          bag={baggageQuantity}
          fuel={fuelType}
          door={doorCount}
          person={passengerQuantity}
          snowflake={airConditionInd}
          transmission={transmissionType}
        />
      </div>
    </Card>
  );
}

export default Vehicle;
