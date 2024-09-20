import { useNavigate } from "react-router-dom";

const ManagerCard = ({ name, designation, route }) => {
  console.log("route value", route)
  const navigate = useNavigate();
  return (
    <>
      <div onClick={() => navigate(route)} className="manager-card-main">
        <img src="https://img.freepik.com/free-psd/3d-illustration-business-man-with-glasses_23-2149436194.jpg?w=1380&t=st=1726443858~exp=1726444458~hmac=fd2cc409101e8c644459bcd6a306fd4093cb133f639f97559d80a37a33ab94d0" />
        <div className="name">{name}</div>
        <div className="designation">{designation}</div>
      </div>
    </>
  );
};

export default ManagerCard;
