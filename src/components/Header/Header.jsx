import Button from "../basic/Button/Button";
import Select from "../basic/Select/Select";
import "./Header.css";

export default function Header({ search, onSearchChange }) {
  return (
    <header className="header">
      <div className="buttons-wrapper">
        <Button type="button" onClick={() => {}}>
          Home
        </Button>
        <Button type="button" onClick={() => {}}>
          Watchlist
        </Button>
      </div>
      <div className="input-wrapper">
        <input type="text" placeholder="Search for a movie..." value={search} onChange={(e) => onSearchChange(e.target.value)}/>
      </div>
      <div className="select-wrapper">
        <Select
          id="genre"
          label="Genre"
          value=""
          onChange={() => {}}
          options={[
            { label: "All", value: "" },
            { label: "Horror", value: "horror" },
          ]}
        />
        <Select
          id="rating"
          label="Rating"
          value=""
          onChange={() => {}}
          options={[
            { label: "1", value: "" },
            { label: "2", value: "" },
          ]}
        />
      </div>
    </header>
  );
}
