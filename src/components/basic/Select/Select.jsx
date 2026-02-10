import "./Select.css";

export default function Select({
  id,
  label,
  value,
  onChange,
  options = [],
  className = "",
}) {
  return (
    <div className="select-group">
      <label htmlFor={id} className="select-label">
        {label}
      </label>
      <select
        id={id}
        className={`select ${className}`.trim()}
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
