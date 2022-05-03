import React, { useState } from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import DialogFormEdit from "../DialogForm/DialogFormEdit/DialogFormEdit";
import Buttons from "../Buttons/Buttons";
function ListUserItem({ user, handleDeleteUser, handleEditUser }) {
  // Show Dialog Form Edit
  const [openDialogEdit, setOpenDialogEdit] = useState(false);
  const handleOpenDialogEdit = () => setOpenDialogEdit(true);
  const handleCloseDialogEdit = () => setOpenDialogEdit(false);
  return (
    <>
      <CardMedia
        component="img"
        sx={{ width: 151, borderRadius: "5px" }}
        image={user.avatar}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 2 }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <Typography component="div" variant="h5">
              {user.first_name}
            </Typography>
            <Typography variant="h5" color="text.secondary" component="div">
              {user.last_name}
            </Typography>
          </Box>

          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {user.email}
          </Typography>
        </CardContent>
      </Box>
      <Box sx={{ display: "flex", gap: "5px" }}>
        <Buttons
          variant="outlined"
          startIcon={<EditLocationAltIcon />}
          onClick={handleOpenDialogEdit}
        >
          Edit
        </Buttons>
        <Buttons
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={() => handleDeleteUser(user.id)}
        >
          Delete
        </Buttons>
      </Box>
      <DialogFormEdit
        openDialogEdit={openDialogEdit}
        handleCloseDialogEdit={handleCloseDialogEdit}
        handleEditUser={handleEditUser}
        user={user}
      />
    </>
  );
}

export default ListUserItem;
