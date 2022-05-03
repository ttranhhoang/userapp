import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import InputUser from "../../InputUser/InputUser";
import Buttons from "../../Buttons/Buttons";

function DialogFormEdit({
  openDialogEdit,
  handleCloseDialogEdit,
  handleEditUser,
  user,
}) {
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastname] = useState(user.last_name);
  const [email, setEmail] = useState(user.email);
  const [avatar, setAvatar] = useState(user.avatar);

  const submitEdit = () => {
    handleCloseDialogEdit();
    if (firstName === " " && lastName === "" && email === "" && avatar === "")
      return;
    handleEditUser(user.id, email, firstName, lastName, avatar);
  };
  return (
    <>
      <Dialog open={openDialogEdit} onClose={handleCloseDialogEdit}>
        <DialogTitle
          sx={{ textAlign: "center", fontWeight: "700", fontSize: "1.5em" }}
        >
          Edit User
        </DialogTitle>
        <DialogContent>
          <InputUser
            autoFocus
            margin="dense"
            id="firstName"
            label="First Name"
            type="text"
            fullWidth
            variant="standard"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <InputUser
            autoFocus
            margin="dense"
            id="lastName"
            label="Last Name"
            type="text"
            fullWidth
            variant="standard"
            value={lastName}
            onChange={(e) => setLastname(e.target.value)}
          />
          <InputUser
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputUser
            autoFocus
            margin="dense"
            id="avatar"
            label="Avatar"
            type="text"
            fullWidth
            variant="standard"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Buttons onClick={submitEdit}>Edit</Buttons>
          <Buttons onClick={handleCloseDialogEdit}>Cancel</Buttons>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default DialogFormEdit;
