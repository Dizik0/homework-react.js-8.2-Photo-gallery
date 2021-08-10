import "../../App.css";
import { useState } from "react";

export const Searchbar = ({ getSearchQuery }) => {
  const [value, setValue] = useState("");

  const getValueInput = (e) => {
    setValue(e.currentTarget.value);
  };
  const SubmitForm = (e) => {
    e.preventDefault();
    getSearchQuery(value);
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={SubmitForm}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          value={value}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={getValueInput}
        />
      </form>
    </header>
  );
};
