import React, { useEffect, useState } from "react";
import Buttons from "../Component/Buttons/Buttons";
import DialogFormAdd from "../Component/DialogForm/DialogFormAdd/DialogFormAdd";
import ListUsers from "../Component/ListUsers/ListUsers";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography, Stack, Box } from "@mui/material";
import "./Home.css";

function getItemStorage() {
  const userLocalValues = JSON.parse(localStorage.getItem("users"));
  return userLocalValues ?? [];
}
function Home() {
  const [listUsers, setListUsers] = useState(getItemStorage());
  //   dialog onClick Add
  const [openDialog, setOpenDialog] = useState(false);
  // state quản lý các inputs
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [avatar, setAvatar] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const fetchDataLocal = await JSON.parse(localStorage.getItem("users"));
      if (fetchDataLocal !== null) {
        return fetchDataLocal ?? [];
      }
      try {
        setLoading(true);
        const respone = await fetch("https://reqres.in/api/users");
        const dataLocal = await respone.json();
        await localStorage.setItem("users", JSON.stringify(dataLocal.data));
        setListUsers(dataLocal.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  //   handle open and close dialog
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  //   handle Add user
  const handleAddUser = () => {
    if (firstName === "" && lastName === "" && email === "" && avatar === "") {
      return;
    }
    const randomId = Math.floor(Math.random() * 100);
    setListUsers((prev) => {
      const newUser = [
        ...prev,
        {
          id: randomId,
          email: email,
          first_name: firstName,
          last_name: lastName,
          avatar: avatar,
        },
      ];
      localStorage.setItem("users", JSON.stringify(newUser));
      return newUser;
    });

    setFirstName("");
    setLastName("");
    setEmail("");
    setAvatar("");
    setOpenDialog(false);
  };
  //   handle Delete user
  const handleDeleteUser = (id) => {
    const deleteUser = listUsers.filter((user) => user.id !== id);
    setListUsers(deleteUser);
    localStorage.setItem("users", JSON.stringify(deleteUser));
  };

  //   handle Edit user
  const handleEditUser = (id, email, first_name, last_name, avatar) => {
    const updateUser = listUsers.map((user) =>
      user.id === id
        ? { ...user, id, email, first_name, last_name, avatar }
        : user
    );
    setListUsers(updateUser);
    localStorage.setItem("users", JSON.stringify(updateUser));
    console.log("edit", updateUser);
  };
  console.log("List user", listUsers);
  return (
    <div className="home">
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress size={70} color="success" />
        </Box>
      ) : (
        <>
          <Stack
            direction="row"
            my={2}
            sx={{
              width: "50rem",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              component="div"
              variant="h5"
              sx={{ letterSpacing: "5px" }}
            >
              List Users
            </Typography>
            <Buttons
              variant="outlined"
              startIcon={<AddCircleIcon />}
              onClick={handleOpenDialog}
            >
              Add User
            </Buttons>
          </Stack>

          <ListUsers
            listUsers={listUsers}
            handleDeleteUser={handleDeleteUser}
            handleEditUser={handleEditUser}
          />

          {/* Dialog khi click button Add */}
          <DialogFormAdd
            openDialog={openDialog}
            handleCloseDialog={handleCloseDialog}
            handleAddUser={handleAddUser}
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            email={email}
            setEmail={setEmail}
            avatar={avatar}
            setAvatar={setAvatar}
          />
        </>
      )}
    </div>
  );
}

export default Home;
