import styles from "./Select.module.css";

export default function Select({
  id,
  label,
  value,
  onChange,
  options = [],
  className = "",
}) {
  return (
    <div className={styles.selectGroup}>
      <label htmlFor={id} className={styles.selectLabel}>
        {label}
      </label>
      <select
        id={id}
        className={`${styles.select} ${className}`.trim()}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}