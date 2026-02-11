import Button from "../basic/Button/Button";
import Select from "../basic/Select/Select";
import "./Header.css";
import { GENRE_OPTIONS, RATING_OPTIONS } from "../../utils/constants.js"


export default function Header({ 
  search, 
  onSearchChange,
  genre, 
  onGenreChange,
  rating,
  onRatingChange,
}) {
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
          value={genre}
          onChange={(e) => onGenreChange(e.target.value)}
          options={GENRE_OPTIONS}
        />
        <Select
          id="rating"
          label="Rating"
          value={rating}
          onChange={(e) => onRatingChange(e.target.value)}
          options={RATING_OPTIONS}
        />
      </div>
    </header>
  );
}
