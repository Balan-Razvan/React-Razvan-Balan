export default function Select(props) {

    const {id, label, value, onChange, options = [], className=""} = props;

    return (
        <div className="select-wrapper">
            <label htmlFor={id} className="select-label">
                {label}
            </label>

            <select id={id} className={`select ${className}`} value={value} onChange={onchange}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
};
