import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { FormControl, TextField } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PasswordIcon from '@mui/icons-material/Password';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Register = (props) => {
  return (
    <div >
      
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.handleclose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle className="text-center font-bold">{"Sign Up"}</DialogTitle>

        <DialogContent className="w-96">
          <div className="py-2 flex">
            <div className="login_icon">
              <AccountCircle className="" sx={{ color: "white" }} />
            </div>

            <FormControl fullWidth>
              <TextField
                id="outlined-password-input"
                label="FirstName"
                type="text"
              />
            </FormControl>
          </div>
          <div className="py-2 flex">
            <div className="login_icon">
              <AccountCircle className="" sx={{ color: "white" }} />
            </div>

            <FormControl fullWidth>
              <TextField
                id="outlined-password-input"
                label="LastName"
                type="text"
              />
            </FormControl>
          </div>
          <div className="py-2 flex">
            <div className="login_icon">
              <AccountCircle className="" sx={{ color: "white" }} />
            </div>

            <FormControl fullWidth>
              <TextField
                id="outlined-password-input"
                label="Email"
                type="email"
              />
            </FormControl>
          </div>
          <div className="py-2 flex">
          <div className="login_icon">
              <PasswordIcon className="" sx={{ color: "white" }} />
            </div>
            <FormControl fullWidth>
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
              />
            </FormControl>
          </div>
          <div className="py-2 flex">
          <div className="login_icon">
              <PasswordIcon className="" sx={{ color: "white" }} />
            </div>
            <FormControl fullWidth>
              <TextField
                id="outlined-password-input"
                label="Confirm Password"
                type="password"
              />
            </FormControl>
          </div>
          <div className="justify-center flex items-center h-full py-5">
            <FormControl fullWidth>
              <Button
                onClick={props.handleclose}
                //variant='contained'
                style={{
                  backgroundColor: "#003366",
                  color: "white",
                }}
              >
                Sign Up
              </Button>
            </FormControl>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Register;
