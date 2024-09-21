import { Dialog, IconButton } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import ManagerProfile from "./ManagerProfile";


const ManagerCard = ({ details }) => {
  const[open, setOpen] = useState(false);
    const { name, designation, projects } = details;

  console.log("name, designation here", name, designation)
  console.log("projects here", projects);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false)
  }
  const handleOpen = () => {
    setOpen(true);
  }
  return (
    <>
      <div onClick={handleOpen} className="manager-card-main">
        <img src="https://img.freepik.com/free-psd/3d-illustration-business-man-with-glasses_23-2149436194.jpg?w=1380&t=st=1726443858~exp=1726444458~hmac=fd2cc409101e8c644459bcd6a306fd4093cb133f639f97559d80a37a33ab94d0" />
        <div className="name">{name}</div>
        <div className="designation">{designation}</div>
      </div>

      <Dialog open={open} sx={{
        maxWidth: "100%"
      }} >
        <div className="manager-view-box">
          <IconButton
            onClick={handleClose}
            style={{ position: "absolute", right: 16, top: 16 }}
          >
            <CloseIcon />
          </IconButton>
           <ManagerProfile details = {details} />
        </div>
      </Dialog>
    </>
  );
};

export default ManagerCard;
