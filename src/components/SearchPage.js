import React from "react";
import "./SearchPage.css";
import Button from "@material-ui/core/Button";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays . 26 august to 30 august . 2 guest</p>
        <h1>Stays nearby</h1>
      </div>
      <Button variant="outlined">Cancelation flexibility</Button>
      <Button variant="outlined">Type of place</Button>
      <Button variant="outlined">Price</Button>
      <Button variant="outlined">Rooms and Beds</Button>
      <Button variant="outlined">More filters</Button>
      <SearchResult
        img="https://d1cfnnhb7hbym9.cloudfront.net/dist/images/home_design.eb7d4643f05241d90fe789e19794d804.jpg"
        location="Rosario, AR"
        title="Excelent house near Parana River"
        description="1 guest . 1 bedroom . Kitchen . Free parking . TV LCD"
        star={4.5}
        price="25 ARS/night"
        total="250 ARS"
      />
    </div>
  );
}

export default SearchPage;
