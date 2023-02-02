import React from "react";
import PropTypes from "prop-types";

function SearchForm({ searchText, setSearchText, onSubmit }) {
  const handleInputChange = (event) => setSearchText(event.target.value);
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div className="search-form">
      <input
        className="search-form_text-box"
        type="text"
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        value={searchText}
        placeholder="Enter city..."
      />
      <button
        className="search-form_button"
        type="submit"
        onClick={onSubmit}
        data-testid="button"
      >
        Search
      </button>
    </div>
  );
}

SearchForm.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
