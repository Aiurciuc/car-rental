import { memo } from "react";
import styles from "./Button.module.scss";

const Button =  memo(function Button({inverted=false, className="", disabled=false, children, ...props  }) {
  let classes;
  if(inverted){
    classes = `body-M ${styles.button} ${styles.inverted} ${className} `
  } else {
    classes =  `body-M ${styles.button} ${styles.buttonPrimary} ${className} `;
  }

  if (disabled) {
    classes = `disabled:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed ${classes}`
  }

  return (
    <button disabled={disabled} className={classes} {...props}>
      {children}
    </button>
  );
})

export default Button;