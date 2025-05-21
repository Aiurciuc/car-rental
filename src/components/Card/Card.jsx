import styles from './Card.module.scss';

function Card({ children, image, title, subtitle, price, features }) {
  return (
    <div className={styles.card}>
      {image && <img src={image} alt={title} className={styles.cardImage} />}
      <div className={styles.cardContent}>
        {title && <h2 className={styles.cardTitle}>{title}</h2>}
        {subtitle && <h3 className={styles.cardSubtitle}>{subtitle}</h3>}
        {features && (
          <ul className={styles.cardFeatures}>
            {features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        )}
        {price && <div className={styles.cardPrice}>{price}</div>}
        {children}
      </div>
    </div>
  );
}


export default Card;
