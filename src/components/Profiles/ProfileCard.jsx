import { Dialog } from "@mui/material";
import { useState } from "react";
import "./profile.scss";
import EmployeeTable from "./EmployeeTable";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const ProfileCard = ({ project }) => {
  const { name, rating, status, manager, startDate, endDate } = project;
  const [open, setOpen] = useState(false);
  
  const role = JSON.parse(localStorage.getItem("role"));

  // Define status-to-color mapping
  const statusColors = {
    "In Progress": { background: "blue", color: "white" },
    Completed: { background: "green", color: "white" },
    "Not Started": { background: "gray", color: "white" },
    "On Hold": { background: "yellow", color: "black" },
    Pending: { background: "orange", color: "white" }, // Example for handling "Pending"
  };

  let ratingName;
   
  if (role === "EMPLOYEE"){
    ratingName = "Your"
  } else if(role === "MANAGER" || role === "ADMIN") {
    ratingName = "Project"
  }
  

  // Get the background and text color based on the status
  const { background, color } = statusColors[status] || {
    background: "black",
    color: "white",
  }; // Default color if status not in map

  const handleClose = () => {
    setOpen(false);
  }

  const handleOpen = () => {
    setOpen(true);
  }

 const employeeData = [
   { name: "Alice Smith", review: "Excellent performance", rating: 5 },
   { name: "Bob Johnson", review: "", rating: 3 }, // No review, so it will show the 'Give Review' button
   {
     name: "Charlie Brown",
     review: "Consistently meets expectations",
     rating: "",
   }, // No rating, so it will show the 'Give Rating' button
   { name: "Dana White", review: "Outstanding teamwork", rating: 5 },
   { name: "Eve Davis", review: "", rating: "" }, // Both buttons will appear
 ];


  return (
    <>
      <div className="project-box">
        <div className="project-name">
          <div>Project Name - </div>
          <div>{name}</div>
        </div>
        <div className="project-rating">
          <div>{ratingName} Rating - </div>
          <div>{rating}</div>
        </div>
        <div className="project-status">
          <div>Status - </div>
          <div
            className="status"
            style={{ backgroundColor: background, color: color }}
          >
            {status}
          </div>
        </div>
        <button onClick={handleOpen} className="view-btn">
          view
        </button>
      </div>

      <Dialog open={open}>
        <div className="project-dialog-box">
          <IconButton
            onClick={handleClose}
            style={{ position: "absolute", right: 16, top: 16 }}
          >
            <CloseIcon />
          </IconButton>
          <div className="project-name">
            <div>Project Name - </div>
            <div>{name}</div>
          </div>
          <div className="project-rating">
            <div>Your Rating - </div>
            <div>{rating}</div>
          </div>
          <div className="project-status">
            <div>Status - </div>
            <div
              className="status"
              style={{ backgroundColor: background, color: color }}
            >
              {status}
            </div>
          </div>
          <div className="pro">
            <div>Project Manager - </div>
            <div>{manager}</div>
          </div>
          <div className="pro">
            <div>Start Date - </div>
            <div>{startDate}</div>
          </div>
          <div className="pro">
            <div>End Date - </div>
            <div>{endDate}</div>
          </div>
          <div className="employee">
            <div>Employee - </div>
            <EmployeeTable employees={employeeData} />
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ProfileCard;
