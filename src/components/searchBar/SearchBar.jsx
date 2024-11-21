import React, { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ searchText, setSearchText }) => {
  const searchHandler = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchText(term);
  };

  return (
    <div class={styles.searchBarDiv}>
      <input
        type="text"
        placeholder="Search for key terms..."
        onChange={searchHandler}
      />
      <button type="submit" class="searchButton">
        <i>Search</i>
      </button>
    </div>
  );
};

export default SearchBar;
