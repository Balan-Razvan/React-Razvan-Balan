import Button from "./basic/Button.jsx";
import Select from "./basic/Select.jsx";

export default function Header() {
  return (
    <header className="header">
      <div className="buttons-wrapper">
        <Button type={"button"} onClick={() => {}}>
          Home
        </Button>
        <Button type={"button"} onClick={() => {}}>
          Watchlist
        </Button>
      </div>
      <div className="input-wrapper">
        <input type="text" placeholder="search for a movie" />
      </div>
      <div className="select-wrapper">
        <Select 
          id="genre"
          label="Genre"
          value=""
          onChange = {() => {}}
          options = {[
            {label: "All", value:""},
            {label: "Horror", value:"horror"}
          ]}
        />
        <Select 
          id="rating"
          label="Rating"
          value=""
          onChange = {() => {}}
          options = {[
            {label: "1", value:""},
            {label: "2", value:""}
          ]}
        />
      </div>
    </header>
  );
}
