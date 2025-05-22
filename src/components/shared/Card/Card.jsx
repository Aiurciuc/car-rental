import styles from "./Card.module.scss";

function Root({ children }) {
  return <div className={styles.card}>{children}</div>;
}

function Header({ title, children }) {
  return (
    <section className={styles.cardHeader}>
      {title && <h3 className={`subtitle-M ${styles.cardTitle}`}>{title}</h3>}
      {children}
    </section>
  );
}

function Content({ children }) {
  return <section className={styles.cardContent}>{children}</section>;
}

function Footer({ children }) {
  return <section className={styles.cardFooter}>{children}</section>;
}

export const Card = {
  Root,
  Header,
  Content,
  Footer
};
