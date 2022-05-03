import React from "react";
import { TextField } from "@mui/material";

function InputUser({ ...props }) {
  return (
    <>
      <TextField
        autoFocus
        margin="dense"
        fullWidth
        color="secondary"
        variant="standard"
        {...props}
      />
    </>
  );
}

export default InputUser;
