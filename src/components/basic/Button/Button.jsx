import "./Button.css";

export default function Button({ type = "button", onClick, children, disabled=false }) {
  return (
    <button type={type} className="btn" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
