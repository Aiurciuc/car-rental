import styles from "./VehicleFeatures.module.scss";

function VehicleFeatures({ bag, fuel, door, person, snowflake, transmission }) {
  return (
    <div className={styles.vehicleFeatures}>
      {bag && (
        <div className={styles.feature}>
          <img className={styles.icon} src="/src/assets/Icons/bag.svg" alt={bag} />
          <span className={`${styles.text} body-M`}>{bag}</span> 
        </div>
      )}
      {fuel && (
        <div className={styles.feature}>
          <img className={styles.icon} src="/src/assets/Icons/fuel.svg" alt={fuel} />
          <span className={`${styles.text} body-M`}>{fuel}</span> 
        </div>
      )}
      {door && (
        <div className={styles.feature}>
          <img className={styles.icon} src="/src/assets/Icons/door.svg" alt={door} />
          <span className={`${styles.text} body-M`}>{door}</span> 
        </div>
      )}
      {person && (
        <div className={styles.feature}>
          <img className={styles.icon} src="/src/assets/Icons/person.svg" alt={person} />
          <span className={`${styles.text} body-M`}>{person}</span> 
        </div>
      )}
      {snowflake && (
        <div className={styles.feature}>
          <img className={styles.icon} src="/src/assets/Icons/snowflake.svg" alt={snowflake} />
          <span className={`${styles.text} body-M`}>{snowflake ? 'Yes': 'No'}</span> 
        </div>
      )}
       {transmission && (
        <div className={styles.feature}>
          <img className={styles.icon} src="/src/assets/Icons/transmission.svg" alt={transmission} />
          <span className={`${styles.text} body-M`}>{transmission}</span> 
        </div>
      )}
    </div>
  );
}

export default VehicleFeatures;
