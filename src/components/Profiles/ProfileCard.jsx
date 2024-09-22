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
  const [averageRating, setAverageRating] = useState(0);

  const { id, name, status, startDate, endDate, ratings } = project;
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
    }
  };

  useEffect(() => {
    if (userRatings.length > 0) {
      let totalRating = userRatings.reduce((acc, item) => acc + item.rating, 0);
      setAverageRating(totalRating / userRatings.length);
    }
  }, [userRatings]);

  const handleOpen = () => {
    if (role === "MANAGER") {
      fetchEmployeesRatings();
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setUserRatings([]);
    setEmployeeInfo([]);
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
  };

  let ratingName = role === "EMPLOYEE" ? "Your" : "Project";
  console.log("userRatings", userRatings)

  return (
    <>
      <div className="project-box">
        <div className="project-name">
          <div>Project Name - </div>
          <div>{name}</div>
        </div>

        <div className="project-name">
          <div>Start Date - </div>
          <div>{startDate}</div>
        </div>
        <div className="project-name">
          <div>End Date - </div>
          <div>{endDate}</div>
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
          {role === "MANAGER" && (
            <div className="project-rating">
              <div>{ratingName} Rating - </div>
              <div>{averageRating.toFixed(2)}</div>{" "}
              {/* Format to 2 decimal places */}
            </div>
          )}
          <div className="project-status">
            <div>Status - </div>
            <div
              className="status"
              style={{ backgroundColor: background, color: color }}
            >
              {status}
            </div>
          </div>
          {role === "MANAGER" && (
            <div className="pro">
              <div>Project Manager - </div>
              <div>{manager}</div>
            </div>
          )}
          <div className="pro">
            <div>Start Date - </div>
            <div>{startDate}</div>
          </div>
          <div className="pro">
            <div>End Date - </div>
            <div>{endDate}</div>
          </div>
          {role === "EMPLOYEE" && (
            <div className="pro">
              <div>Review - </div>
              <div>{ratings.length > 0 && <div>{ratings[0].review}</div>}</div>
            </div>
          )}
          {role === "EMPLOYEE" && (
            <div className="pro">
              <div>Rating - </div>
              <div>{ratings.length > 0 && <div>{ratings[0].rating}</div>}</div>
            </div>
          )}
          {role === "MANAGER" && (
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
          )}
        </div>
      </Dialog>
    </>
  );
};

export default ProfileCard;
