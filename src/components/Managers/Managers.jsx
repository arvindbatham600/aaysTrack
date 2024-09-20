import ManagerCard from "./ManagerCard";
import "./managers.scss";

const managersData = [
  {
    id: 1,
    name: "Alice Johnson",
    designation: "Software Engineer",
    route :"/profile"
  },
  {
    id: 2,
    name: "Bob Smith",
    designation: "Project Manager",
  },
  {
    id: 3,
    name: "Charlie Brown",
    designation: "UX Designer",
  },
  {
    id: 4,
    name: "Diana Greene",
    designation: "Product Owner",
  },
  {
    id: 5,
    name: "Edward Davis",
    designation: "QA Tester",
  },
  {
    id: 6,
    name: "Fiona Lee",
    designation: "Data Scientist",
  },
  {
    id: 7,
    name: "George White",
    designation: "DevOps Engineer",
  },
  {
    id: 8,
    name: "Hannah Clark",
    designation: "Business Analyst",
  },
];

const Managers = () => {
  return (
    <>
      <div className="managers-main">
        <div className="managers-body">
          {managersData.map((item) => (
            <ManagerCard
              key={item.id}
              name={item.name}
              designation={item.designation}
              route = {item.route}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Managers;
