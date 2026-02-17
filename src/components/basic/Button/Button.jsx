import styles from "./Button.module.css";

export default function Button({ type = "button", onClick, children, disabled = false }) {
  return (
    <button type={type} className={styles.btn} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}