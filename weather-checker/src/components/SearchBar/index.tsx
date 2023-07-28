import { ChangeEvent, MouseEventHandler } from "react";
import SearchButton from "../SearchButton";
import { TextField } from "@mui/material";
import "./index.css"

type SearchBarProps = {
  handleClick: MouseEventHandler<HTMLButtonElement>;
  handleSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
  city: string;
};

function SearchBar({ handleClick, handleSearchChange, city }: SearchBarProps) {
  return (
    <div className="search-bar-container">
      <div>
        <TextField
          variant="outlined"
          type="text"
          onChange={handleSearchChange}
          placeholder="Enter a city"
          value={city}
          />
      <div className="searchBtn">
        <SearchButton handleClick={handleClick} />
      </div>
      </div>
      <div className="search-bar"></div>
    </div>
  );
}



export default SearchBar;
