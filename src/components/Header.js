import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import Button from "@material-ui/core/Button";
import { Avatar } from "@material-ui/core";
import DatePicker from "./DatePicker";

function Header() {
  const [showsearch, setShowSearch] = useState(false);

  const handleClick = () => {
    setShowSearch(!showsearch);
  };

  return (
    <div className="hero">
      <div className="header">
        <img
          src="https://logodownload.org/wp-content/uploads/2016/10/Airbnb-Logo.png"
          alt=""
          className="header__icon grow"
        />
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
      {showsearch ? (
        <DatePicker showsearch={showsearch} setShowSearch={setShowSearch} />
      ) : (
        <div className="hero__jumbotron">
          <h2>Viaja Cerca</h2>
          <p>
            Quedate por un tiempo en un lugar nuevo. Descubrí alojamientos
            cercanos donde vivir, trabajar o simplemente relajarte.
          </p>
          <Button onClick={handleClick}>Explorá las fechas</Button>
        </div>
      )}
    </div>
  );
}

export default Header;
