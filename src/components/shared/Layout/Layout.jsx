import styles from "./Layout.module.scss";

function Layout({ children, className='',  ...props }) {

  return (
    <div className={`${styles.layout} ${className}`}  {...props}>
      {children}
    </div>
  );
}

export default Layout;
