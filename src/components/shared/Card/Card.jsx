import styles from "./Card.module.scss";

function Root({ children, className = "", ...props }) {
  return <section className={`${styles.card} ${className}`} {...props}>{children}</section>;
}

function Header({ title, children, fontClass="subtitle-M" }) {
  return (
    <header className={styles.cardHeader}>
      {title && <h3 className={`${fontClass} ${styles.cardTitle}`}>{title}</h3>}
      {children}
    </header>
  );
}

function Content({ children }) {
  return <main className={styles.cardContent}>{children}</main>;
}

function Footer({ children }) {
  return <footer className={styles.cardFooter}>{children}</footer>;
}

export const Card = {
  Root,
  Header,
  Content,
  Footer
};
