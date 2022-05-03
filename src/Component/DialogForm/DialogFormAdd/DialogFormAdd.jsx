import React from "react";
import InputUser from "../../InputUser/InputUser";
import Buttons from "../../Buttons/Buttons";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
function DialogFormAdd({
  openDialog,
  handleCloseDialog,
  handleAddUser,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  avatar,
  setAvatar,
}) {
  return (
    <>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle
          sx={{ textAlign: "center", fontWeight: "700", fontSize: "1.5em" }}
        >
          Add New User
        </DialogTitle>
        <DialogContent>
          <InputUser
            margin="dense"
            id="firstName"
            label="First Name"
            type="text"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <InputUser
            margin="dense"
            id="lastName"
            label="Last Name"
            type="text"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <InputUser
            margin="dense"
            id="email"
            label="Email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputUser
            autoFocus
            margin="dense"
            id="avatar"
            label="Avatar"
            type="text"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Buttons onClick={handleAddUser}>Add</Buttons>
          <Buttons onClick={handleCloseDialog}>Cancel</Buttons>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default DialogFormAdd;
