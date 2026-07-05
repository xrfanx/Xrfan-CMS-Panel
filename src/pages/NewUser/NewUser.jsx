import "./NewUser.css";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useState } from "react";

export default function NewUser() {
  const [openAlert, setOpenAlert] = useState(false);

  const newUserButtonHandler = () => {
    event.preventDefault();
    setOpenAlert(true);
    setTimeout(() => {
      setOpenAlert(false);
    }, 1500);
  };

  return (
    <div className="newUser">
      <div className="newUserAddAlert">
        {openAlert && (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="success">User added successfully</Alert>
          </Stack>
        )}
      </div>
      <div className="newUserTitle">Add New User</div>
      <form className="newUserForm">
        <div className="newUserFormLeft">
          <label>User Name</label>
          <input type="text" placeholder="User Name" />
          <label>Email</label>
          <input type="text" placeholder="Email" />
          <label>Password</label>
          <input type="password" placeholder="Password" />
        </div>
        <div className="newUserFormRight">
          <button className="newUserButton" onClick={newUserButtonHandler}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
}



