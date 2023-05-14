import React from "react";
import "../Styles/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input type="text" placeholder="Search for Artists, Songs or People" />
      </div>

      <div className="header__right">
        <Avatar src="" alt="chai sutta" />
        <h4>Hits harder than chai sutta</h4>
      </div>
    </div>
  );
}

export default Header;
