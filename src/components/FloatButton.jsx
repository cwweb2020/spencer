import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const FloatButton = () => {
  return (
    <Fab color="secondary" aria-label="add">
      <AddIcon />
    </Fab>
  );
};

export default FloatButton;
