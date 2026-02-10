import "./Button.css";

export default function Button({ type = "button", onClick, children }) {
  return (
    <button type={type} className="btn" onClick={onClick}>
      {children}
    </button>
  );
}
