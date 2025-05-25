import styles from "./Legend.module.scss";
import { formatDateTime } from "../../../../utils/formatDateTime";

function Legend({
  pickUpDateTime,
  pickUpLocation,
  returnDateTime,
  returnLocation,
  className,
}) {
  return (
    <section className={`${styles.legend} ${className} `}>
      <div className={styles.legendItem}>
        <span className={`${styles.label} subtitle-M`}>Pick-up:</span>
        <span className={`body-L`}>{formatDateTime(pickUpDateTime)}</span>
        <span className={`body-L`}>
          <img
            className={styles.icon}
            src="/assets/Icons/plane.svg"
            alt="plane"
          />

          {pickUpLocation}
        </span>
      </div>
      <div className={styles.legendItem}>
        <span className={`${styles.label} subtitle-M`}>Return:</span>
        <span className={`body-L`}>{formatDateTime(returnDateTime)}</span>
        <span className={`body-L`}>
          <img
            className={styles.icon}
            src="/assets/Icons/plane.svg"
            alt="plane"
          />
          {returnLocation}
        </span>
      </div>
    </section>
  );
}

export default Legend;
