import styles from "./NotFound.module.scss";
import Layout from "../../components/shared/Layout/Layout";

function NotFound() {
  return (
    <Layout>
      <section className={styles.notFound} role="region">
        <h1 className="title-XL" id="notfound-heading">Page Not Found</h1>
      </section>
    </Layout>
  );
}

export default NotFound;
