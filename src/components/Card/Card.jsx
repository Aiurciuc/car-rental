import GeneralFeatures from "../GeneralFeatures/GeneralFeatures";
import styles from "./Card.module.scss";

function Card({
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
    <div className={styles.card}>
      {vehMakeModel.name && <h3 className="subtitle-M">{vehMakeModel.name}</h3>}
      {pictureURL && (
        <img
          src={pictureURL}
          alt={vehMakeModel.name}
          className={styles.cardImage}
        />
      )}
      {}

      <div className={styles.cardContent}>
        <GeneralFeatures
          bag={baggageQuantity}
          fuel={fuelType}
          door={doorCount}
          person={passengerQuantity}
          snowflake={airConditionInd}
          transmission={transmissionType}
        />
      </div>
    </div>
  );
}

export default Card;
