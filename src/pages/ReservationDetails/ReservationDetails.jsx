import { useLocation } from "react-router";
import styles from "./ReservationDetails.module.scss";
import { Card } from "../../components/Card/Card";
import CenteredMessage from "../../components/CenteredMessage/CenteredMessage";

function ReservationDetails() {
  const { state } = useLocation();

  if (!state) {
    return <CenteredMessage message="No car reserved. Please reserve a car." />
  }

  const { name, pictureURL, price, vendor } = state.reservationDetails;

  return (
    <Card.Root className={styles.card}>
      <Card.Header
        fontClass="title-M"
        title={`Your reservation is confirmed!`}
      ></Card.Header>
      <Card.Content>
        {pictureURL && (
          <img
            src={pictureURL}
            alt={name}
            className={styles.carImage}
          />
        )}
        <p className="body-M">You have reserved a <b>{name}</b> from vendor <b>{vendor.name}</b> at a price of <span className="body-L bold">{price.estimatedTotalAmount}  {price.currencyCode} </span></p>
    
      </Card.Content>
      
    </Card.Root>
  );
}

export default ReservationDetails;
