import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Card, Spin } from "antd";
import userStore from "../../Store/Store";
import "./Card.css";

const Cards = observer(({ filteredUsers, setFilteredUsers }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await userStore.fetchUsers();
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = userStore.users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const usersToDisplay =
    filteredUsers.length > 0 ? filteredUsers : userStore.users;

  return (
    <div className="cards">
      {userStore.isLoading ? (
        <Spin size="large" />
      ) : (
        usersToDisplay.map((user) => (
          <Card
            title={`Карта - ${user.id}`}
            bordered={true}
            className="card"
            key={user.id}
          >
            <p>{`${user.name} - ${user.username}`}</p>
            <p>{user.email}</p>
            <p>{user.address.zipcode}</p>
          </Card>
        ))
      )}
    </div>
  );
});

export default Cards;

