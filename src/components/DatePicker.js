import React, { useState } from "react";
import "./DatePicker.css";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import Button from "@material-ui/core/Button";
import PeopleIcon from "@material-ui/icons/People";

function DatePicker({ showsearch, setShowSearch }) {
  //Date picker state
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  return (
    <div className="datepicker">
      <DateRangePicker
        className="datepicker__element"
        ranges={[selectionRange]}
        onChange={handleSelect}
      />
      <div className="datepicker__search">
        <div className="datepicker__searchField">
          <h2>Adultos</h2>
          <p>De 13 años o más</p>
          <input type="number" min={0} defaultValue={0} />
        </div>
        <div className="datepicker__searchField">
          <h2>Niños</h2>
          <p>De 2 a 12 años</p>
          <input type="number" min={0} defaultValue={0} />
        </div>
        <div className="datepicker__searchField">
          <h2>Bebés</h2>
          <p>De 2 años o menos</p>
          <input type="number" min={0} defaultValue={0} />
        </div>
        <Button
          className="btn-close"
          onClick={() => setShowSearch(!showsearch)}
        >
          Cerrar
        </Button>
      </div>
    </div>
  );
}

export default DatePicker;
