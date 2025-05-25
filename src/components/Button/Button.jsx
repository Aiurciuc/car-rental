import { memo } from "react";
import styles from "./Button.module.scss";

const Button = memo(function Button({
  inverted = false,
  className = "",
  disabled = false,
  children,
  ...props
}) {
  let classes;
  if (inverted) {
    classes = `semibold body-M ${styles.button} ${styles.inverted} ${className} `;
  } else {
    classes = `semibold body-M ${styles.button} ${styles.buttonPrimary} ${className} `;
  }

  return (
    <button disabled={disabled} className={classes} {...props}>
      {children}
    </button>
  );
});

export default Button;
