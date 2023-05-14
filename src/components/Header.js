import React from "react";
import "../Styles/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import { useStateValue } from "../DataLayer";

function Header() {
  const [{ user }, dispatch] = useStateValue();
  console.log(user);

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input type="text" placeholder="Search for Artists, Songs or People" />
      </div>

      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt="chai sutta" />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
