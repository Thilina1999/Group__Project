import React from "react";
import { Snackbar, makeStyles } from "@material-ui/core";
import { Alert } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    top: theme.spacing(15),
  },
}));

export default function Notification(props) {
  const { notify, setNotify } = props;
  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setNotify({
      ...notify,
      Open: false,
    });
  };

  return (
    <Snackbar
      className={classes.root}
      open={notify.Open}
      autoHideDuration={2000}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      onClose={handleClose}
    >
      <Alert severity={notify.type} onClose={handleClose} variant="filled">
        {notify.message}
      </Alert>
    </Snackbar>
  );
}
