import { vehicleSortOptions } from "../../constants/vehicleSortOptions";
import { Dropdown } from "../../../../components/shared/Dropdown/Dropdown";
import styles from "./CarsOptions.module.scss";
import { memo } from "react";

const CarsOptions = memo(function({ sortBy, onSortChange }) {
  return (
    <div className={styles.menu}>
      <Dropdown.Root >
        <Dropdown.Label
          className="subtitle-S"
          label="Sort by:"
          id="sort-label"
        />
        <Dropdown.Select
          aria-labelledby="sort-label"
          value={sortBy}
          onChange={onSortChange}
          placeholder="Select..."
          className={styles.dropdown}
          options={vehicleSortOptions}
        />
      </Dropdown.Root>
    </div>
  );
})

export default CarsOptions;
