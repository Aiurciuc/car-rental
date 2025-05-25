import React from 'react';
import styles from './Layout.module.scss';
import Header from './Header/Header';

function Layout({ children }) {
  return (
    <div className="layout-container">
      <Header />
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
}

export default Layout;