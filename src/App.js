import React, { useState } from "react";
import Header from "./components/header/Header.jsx";
import SearchBar from "./components/searchBar/SearchBar.jsx";
import "./App.css"; // Importing App.css
import DataBlock from "./components/dataBlock/DataBlock.jsx";

function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="App">
      <Header />
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <div className="dataHolder">
        <DataBlock platform="X" sentiment="positive" keyTerm={searchText} />
        <DataBlock
          platform="Instagram"
          sentiment="negative"
          keyTerm={searchText}
        />
        <DataBlock platform="Facebook" keyTerm={searchText} />
      </div>
    </div>
  );
}

export default App;
