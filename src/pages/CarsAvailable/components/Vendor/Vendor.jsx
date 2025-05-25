import { memo } from "react";
import styles from "./Vendor.module.scss";

const vendorLogos = {
  alamo: "/src/assets/Vendors/alamo.svg",
  avis: "/src/assets/Vendors/avis.svg",
  hertz: "/src/assets/Vendors/hertz.svg",
};

const Vendor = memo(function ({ vendor }) {
  vendor = vendor.toLowerCase();
  return (
    <>
      {vendorLogos[vendor] && (
        <img
          className={styles.vendor}
          src={vendorLogos[vendor]}
          alt={vendor}
        />
      )}
    </>
  );
})

export default Vendor;
