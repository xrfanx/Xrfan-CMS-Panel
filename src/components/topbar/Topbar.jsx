import "./Topbar.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

export default function Topbar() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const [openAlert, setOpenAlert] = useState(false);
  const topbarAlertHandler = () => {
    setOpenAlert(true);
    setTimeout(() => {
      setOpenAlert(false);
    }, 2500);
  };

  return (
    <div className="topbar">

        <div className="topbarAlert">
            {openAlert && (
                <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert style={{fontWeight: 600}} severity="error">You can't access to settings</Alert>
                </Stack>
            )}
        </div>
        

        <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <div className="topbarWrapper">
        <div className="topLeft">
          <Link to='/' className="Link">
          <span className="logo">Xrfan CMS</span>
          </Link>
        </div>

        <div className="topRight">
          <div className="topbarIconConatainer">
            <NotificationsIcon onClick={handleOpen} />
            <span className="topIconBadge">9  </span>
          </div>

          <div className="topbarIconConatainer">
            <LanguageIcon onClick={handleOpen} />
            <span className="topIconBadge">2</span>
          </div>

          <div className="topbarIconConatainer">
            <SettingsIcon onClick={() => topbarAlertHandler()} />
          </div>

          <img src={`${import.meta.env.BASE_URL}images/profile.webp`} className="topAvatar" onClick={handleOpen} />
        </div>
      </div>
    </div>
  );
}
