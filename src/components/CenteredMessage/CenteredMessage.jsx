import styles from './CenteredMessage.module.scss';

function CenteredMessage({ message }) {
  return (
        <section className={styles.messageSection}>
          <h1 className="title-XL">{message}</h1>
        </section>
      );
    };


export default CenteredMessage;