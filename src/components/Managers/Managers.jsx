import ManagerCard from "./ManagerCard";
import "./managers.scss";
import api from "../utils/api";
import { useEffect, useState } from "react";

const user = JSON.parse(localStorage.getItem("user"));
const role = user?.userDetails?.role;

const Managers = () => {
  const [allManagerData, setAllManagerData] = useState([]);

  useEffect(() => {
    fetchManagersData();
  }, []);

  const fetchManagersData = async () => {
    try {
      const response = await api.get("/user/getManagersWithProjectDetails", {
        role,
      });
      setAllManagerData(response.data?.managers);
      console.log("data of all manager", response.data.managers);
    } catch (error) {
      console.error("Error fetching manager data:", error);
      alert("Error fetching manager data:" + error);
    }
  };

  console.log("allManagersData", allManagerData);
  return (
    <>
      <div className="managers-main">
        <div className="managers-body">
          {allManagerData.length > 0 ? (
            allManagerData.map((details) => <ManagerCard details={details} />)
          ) : (
            <p>Loading managers...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Managers;
