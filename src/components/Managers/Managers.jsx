import ManagerCard from "./ManagerCard";
import "./managers.scss";
import api from "../utils/api";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box"; // MUI Box for layout

const user = JSON.parse(localStorage.getItem("user"));
const role = user?.userDetails?.role;

const Managers = () => {
  const [allManagerData, setAllManagerData] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    fetchManagersData();
  }, []);

  const fetchManagersData = async () => {
    try {
      const response = await api.get("/user/getManagersWithProjectDetails", {
        params: { role }, // Ensure role is sent as params
      });
      setAllManagerData(response.data?.managers || []);
      console.log("Data of all managers", response.data.managers);
    } catch (error) {
      console.error("Error fetching manager data:", error);
      alert("Error fetching manager data: " + error.message);
    } finally {
      setLoading(false); // Set loading to false when done
    }
  };

  console.log("allManagersData", allManagerData);
  return (
    <>
      <div className="managers-main">
        <div className="managers-body">
          {loading && ( // Show loading spinner while fetching data
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              marginBottom={2}
            >
              <CircularProgress />
            </Box>
          )}
          {allManagerData.length > 0
            ? allManagerData.map((details) => (
                <ManagerCard key={details.id} details={details} />
              )) // Added key prop
            : !loading && (
                <p>No managers found.</p>
              ) // Message if no managers are available and not loading
          }
        </div>
      </div>
    </>
  );
};

export default Managers;
