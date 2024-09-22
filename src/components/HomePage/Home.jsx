import { useDispatch } from "react-redux";
import Box from "./Box";
import Profile from "../Profiles/Profile";
import { useEffect, useState } from "react";
import api from "../utils/api";




const Home = () => {
  const [managercCount, setManagerCout] = useState();
  const [employeeCount, setEmployeeCount] = useState();
  const [projectCount, setProjectCount] = useState();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user.userDetails.role;

  const fetchManagersData = async () => {
    try {
      const response = await api.get("/user/getManagersWithProjectDetails", {
        role,
      });
      setManagerCout(response.data?.managers.length);
    } catch (error) {
      console.error("Error fetching manager data:", error);
      alert("Error fetching manager data:" + error);
    }
  };

    const fetchAllProjects = async () => {
      const { data } = await api.get("/user/globalProjects");
      setProjectCount(data.users.length);
    };
  
    const fetchEmployeeData = async () => {
      try {
        const response = await api.get("/user/getEmployeesWithProjectDetails", {
          role,
        });
        const employees = response.data?.employees || [];
        setEmployeeCount(employees.length);
      } catch (error) {
        console.error("Error fetching employees data:", error);
        alert("Error fetching employees data: " + error);
      }
    };
  
  console.log("manager, project, employee",managercCount , projectCount, employeeCount )

  useEffect(() => {
    fetchManagersData();
    fetchEmployeeData();
    fetchAllProjects();
  },[])



  console.log(" role in home ", role)

  const homeBoxesData = [
    {
      id: 1,
      text: "Total No. of Managers",
      value: managercCount,
    },
    {
      id: 2,
      text: "Total No. of Employees",
      value: employeeCount,
    },
    {
      id: 1,
      text: "Total No. of projects",
      value: projectCount,
    },
  ];



  return (
    <>
      <div className="home-main">
        <div className="home-body" >
          { role === "ADMIN" && homeBoxesData.map((item) => (
            <Box key={item.id} text={item.text} value={item.value} />
          ))}
          {(role === "MANAGER" || role === "EMPLOYEE") && <Profile />}
        </div>
      </div>
    </>
  );
};

export default Home;
