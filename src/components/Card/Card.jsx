import styles from "./Card.module.scss";

function Card({ car: { pictureurl, vehmakemodel } }) {
  return (
    <div className={styles.card}>
      {pictureurl && (
        <img
          src={pictureurl}
          alt={vehmakemodel.name}
          className={styles.cardImage}
        />
      )}
      <div className={styles.cardContent}>
        
        {vehmakemodel.name && (
          <h4 >{vehmakemodel.name}</h4>
        )}
        {/* {features && (
          <ul className={styles.cardFeatures}>
          {features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
            ))}
            </ul>
            )}
            {price && <div className={styles.cardPrice}>{price}</div>}
            {children} */}
      </div>
      
    </div>
  );
}

export default Card;
