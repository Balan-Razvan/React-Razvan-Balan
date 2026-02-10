import Button from "./Button.jsx";

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
        <div className="genre">
          <label htmlFor="genre-select">test</label>
          <select id="genre-select" className="select">
            <option value="test">test1</option>
          </select>
        </div>

        <div className="genre">
          <label htmlFor="genre-select">test</label>
          <select id="genre-select" className="select">
            <option value="test">test1</option>
          </select>
        </div>
        
      </div>
    </header>
  );
}
