import React from "react";
import ListUserItem from "../ListUserItem/ListUserItem";
import { Card } from "@mui/material";
import "./ListUsers.css";

function ListUsers({ listUsers, handleDeleteUser, handleEditUser }) {
  return (
    <>
      {listUsers.map((user) => (
        <Card
          key={user.id}
          sx={{
            display: "flex",
            marginBottom: "10px",
            padding: "5px 10px",
            width: "50rem",
            alignItems: "center",
          }}
        >
          <ListUserItem
            user={user}
            handleDeleteUser={handleDeleteUser}
            handleEditUser={handleEditUser}
          />
        </Card>
      ))}
    </>
  );
}

export default ListUsers;
