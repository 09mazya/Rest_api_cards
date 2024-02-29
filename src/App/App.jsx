import Cards from "../components/Cards/Cards";
import SearchBar from "../components/SearchBar/SearchBar";
import { useState } from "react";
import userStore from "../Store/Store";
import { Button } from "antd";
import "./App.css";

function App() {
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleSearch = (searchTerm) => {
    const filteredUsersArray = userStore.users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filteredUsersArray);
  };
  const handleRefresh = () => {
    userStore.fetchUsers();
  };
  return (
    <div className="container">
      <header>
        <SearchBar onSearch={handleSearch} />
        <Button onClick={handleRefresh}>Обновить</Button>
      </header>
      <Cards
        filteredUsers={filteredUsers}
        setFilteredUsers={setFilteredUsers}
      />
    </div>
  );
}

export default App;
