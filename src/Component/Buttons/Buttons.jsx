import React from "react";
import { Button } from "@mui/material";
function Buttons({ children, ...props }) {
  return (
    <>
      <Button
        {...props}
        size="small"
        sx={{ textTransform: "capitalize" }}
      >
        {children}
      </Button>
    </>
  );
}

export default Buttons;
