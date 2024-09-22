import { Dialog } from "@mui/material";
import { useEffect, useState } from "react";
import "./profile.scss";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import api from "../utils/api";
import RatingsTable from "./RatingTable";
import EmployeeRatingTable from "./EmployeeRatingTable";

const ProfileCard = ({ project }) => {
  const [employeeInfo, setEmployeeInfo] = useState([]);
  const [userRatings, setUserRatings] = useState([]);
  const [projectId, setProjectId] = useState();
  const [open, setOpen] = useState(false);

  const { id, name, rating, status, startDate, endDate } = project;
  const details = JSON.parse(localStorage.getItem("user"))?.userDetails;
  const manager = details?.name;
  const role = JSON.parse(localStorage.getItem("role"));

  const fetchEmployeesRatings = async () => {
    try {
      const response = await api.get(`/user/project/${id}`);
      setUserRatings(response.data?.Project?.ratings || []);
      setEmployeeInfo(response.data?.Project?.employees || []);
      setProjectId(response.data?.Project?.id);
    } catch (error) {
      console.error("Error while fetching project information:", error);
      // Optionally set an error state here
    }
  };

  const handleOpen = () => {
    fetchEmployeesRatings();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setUserRatings([]); // Reset on close
    setEmployeeInfo([]); // Reset on close
  };

  // Define status-to-color mapping
  const statusColors = {
    ONGOING: { background: "blue", color: "white" },
    COMPLETED: { background: "green", color: "white" },
    "Not Started": { background: "gray", color: "white" },
    "On Hold": { background: "yellow", color: "black" },
    PENDING: { background: "orange", color: "white" },
  };

  const { background, color } = statusColors[status] || {
    background: "black",
    color: "white",
  }; // Default color if status not in map

  let ratingName = role === "EMPLOYEE" ? "Your" : "Project";

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
          View
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
            {userRatings.length > 0 ? (
              <RatingsTable rating={userRatings} />
            ) : (
              <EmployeeRatingTable
                projectId={projectId}
                employees={employeeInfo}
              />
            )}
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ProfileCard;
