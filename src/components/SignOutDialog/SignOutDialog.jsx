import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Slide,
} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const SignOutDialog = ({ open, handleClose, handleConfirm }) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
    >
      <DialogTitle>Are you sure you wan to sign out?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          By clicking yes you will be signed out of the application and
          redirected to sign in screen. Do you wish to continue?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>No</Button>
        <Button onClick={handleConfirm}>Yes</Button>
      </DialogActions>
    </Dialog>
  );
};

export default SignOutDialog;
