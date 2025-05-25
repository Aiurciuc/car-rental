import { useState, useRef, useEffect, createContext, useContext, memo } from "react";
import styles from "./Dropdown.module.scss";
import Button from "../Button/Button";

const DropdownContext = createContext();

function Label({ label, className, ...props }) {
  return (
    <>
      {label && (
        <label className={`${styles.label} ${className}`} {...props}>
          {label}
        </label>
      )}
    </>
  );
}

function Root({ children, className }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <DropdownContext.Provider
      value={{
        open,
        setOpen,
      }}
    >
      <div className={`${styles.dropdown} ${className}`} ref={ref}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

const Select =  memo(function Select({
  options = [],
  value,
  onChange,
  placeholder = "Select...",
  className = "",
  disabled = false,
  ...props
}) {
  const { open, setOpen } = useContext(DropdownContext);

  function handleSelect(option) {
    if (!disabled) {
      onChange(option);
      setOpen(false);
    }
  }

  return (
    <>
      <Button
        type="button"
        inverted={true}
        className={`${styles.toggleButton} ${className}`}
        onClick={() => setOpen((open) => !open)}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        {...props}
      >
        <span>{value ? value.label : placeholder}</span>
        <span className={styles.arrowContainer}>
          <img className={styles.icon} src="/assets/Icons/angle-down.svg" alt="Toggle dropdown" />
        </span>
      </Button>
      {open && (
        <ul className={styles.menu} role="listbox">
          {!options.length && (
            <li className={styles.option} aria-disabled="true">
              No options
            </li>
          )}
          {options.length &&
            options.map((option) => (
              <li
                key={option.value}
                className={`${styles.option} ${
                  value && value.value === option.value ? styles.selected : ""
                } body-M`}
                onClick={() => handleSelect(option)}
                role="option"
                aria-selected={value && value.value === option.value}
              >
                {option.label}
              </li>
            ))}
        </ul>
      )}
    </>
  );
})

export const Dropdown = {
  Root,
  Label,
  Select,
};
