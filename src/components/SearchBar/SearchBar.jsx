import { Button, Input } from "antd";
import React, { useState } from "react";
import './SearchBar.css'
const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleClear = () => {
    setSearchTerm("");
    onSearch("");
  };

  return (
    <div className="search">
      <Input
        type="text"
        placeholder="Поиск"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="input-container"
      />
      <Button onClick={handleSearch}>Поиск</Button>
      <Button onClick={handleClear}>Очистить</Button>
    </div>
  );
};

export default SearchBar;
