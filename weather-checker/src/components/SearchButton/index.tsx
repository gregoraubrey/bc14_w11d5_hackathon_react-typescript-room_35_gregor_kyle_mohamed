import { MouseEventHandler } from "react";
import { Button } from "@mui/material";
import "./index.css"

type SearchButtonProps = {
  handleClick: MouseEventHandler<HTMLButtonElement>;
};

function SearchButton({ handleClick }: SearchButtonProps) {
  return (
    <div className="searchButton">
      <Button variant="contained" onClick={handleClick}>Search</Button>
    </div>
  );
}

export default SearchButton;
