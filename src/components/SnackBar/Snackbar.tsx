import { IconButton, Snackbar } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React from "react";
import { SharedSnackbarConsumer } from "./SnackContext";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props: any) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SharedSnackbar = () => (
  <SharedSnackbarConsumer>
    {({ isOpen, message, closeSnackbar }) => (
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={isOpen}
        autoHideDuration={6000}
        onClose={closeSnackbar}
        message={message}
        action={[
          <IconButton key="close" color="inherit" onClick={closeSnackbar}>
            <Close />
          </IconButton>,
        ]}
      >
        <Alert severity="success">{message}</Alert>
      </Snackbar>
    )}
  </SharedSnackbarConsumer>
);

export default SharedSnackbar;
