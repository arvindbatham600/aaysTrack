import { useDispatch } from "react-redux";
import Box from "./Box"; // Your custom Box component
import Profile from "../Profiles/Profile";
import { useEffect, useState } from "react";
import api from "../utils/api";
import CircularProgress from "@mui/material/CircularProgress";
import BoxContainer from "@mui/material/Box"; // Use MUI's Box for layout

const Home = () => {
  const [managerCount, setManagerCount] = useState(0);
  const [employeeCount, setEmployeeCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);
  const [loading, setLoading] = useState(true); // Loading state
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const role = user.userDetails?.role;

  const fetchManagersData = async () => {
    try {
      const response = await api.get("/user/getManagersWithProjectDetails", {
        params: { role },
      });
      setManagerCount(response.data?.managers.length || 0);
    } catch (error) {
      console.error("Error fetching manager data:", error);
      alert("Error fetching manager data: " + error.message);
    }
  };

  const fetchAllProjects = async () => {
    try {
      const { data } = await api.get("/user/globalProjects");
      setProjectCount(data.users?.length || 0);
    } catch (error) {
      console.error("Error fetching project data:", error);
      alert("Error fetching project data: " + error.message);
    }
  };

  const fetchEmployeeData = async () => {
    try {
      const response = await api.get("/user/getEmployeesWithProjectDetails", {
        params: { role },
      });
      const employees = response.data?.employees || [];
      setEmployeeCount(employees.length);
    } catch (error) {
      console.error("Error fetching employees data:", error);
      alert("Error fetching employees data: " + error.message);
    }
  };

  useEffect(() => {
    if (role === "ADMIN") {
      setLoading(true); // Set loading to true before API calls
      Promise.all([
        fetchManagersData(),
        fetchEmployeeData(),
        fetchAllProjects(),
      ])
        .then(() => {
          setLoading(false); // Set loading to false after API calls complete
        })
        .catch((error) => {
          console.error("Error in fetching data:", error);
          setLoading(false);
        });
    }
  }, [role]);

  const homeBoxesData = [
    {
      id: 1,
      text: "Total No. of Managers",
      value: managerCount,
    },
    {
      id: 2,
      text: "Total No. of Employees",
      value: employeeCount,
    },
    {
      id: 3, // Unique id
      text: "Total No. of Projects",
      value: projectCount,
    },
  ];

  return (
    <div className="home-main">
      <div className="home-body">
        {loading && ( // Show loading spinner while fetching data
          <BoxContainer
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginBottom={2} // Space below the spinner
          >
            <CircularProgress />
          </BoxContainer>
        )}
        {!loading &&
          role === "ADMIN" &&
          homeBoxesData.map((item) => (
            <Box key={item.id} text={item.text} value={item.value} />
          ))}
        {!loading && (role === "MANAGER" || role === "EMPLOYEE") && <Profile />}
      </div>
    </div>
  );
};

export default Home;
