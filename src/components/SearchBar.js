import React from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function SearchBar() {
  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://logodownload.org/wp-content/uploads/2016/10/Airbnb-Logo.png"
          alt=""
          className="header__icon grow"
        />
      </Link>
      <div className="header__search grow">
        <input type="text" placeholder="Empezá tu búsqueda" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__right ">
        <p className="grow">Sé Anfitrión</p>
        <LanguageIcon className="grow" />
        <Avatar
          src="https://avatars.dicebear.com/api/human/1234.svg"
          className="grow"
        />
      </div>
    </div>
  );
}

export default SearchBar;
