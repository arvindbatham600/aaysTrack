import { useDispatch, useSelector } from "react-redux";
import Box from "./Box";
import Profile from "../Profiles/Profile";


const homeBoxesData = [
  {
    id: 1,
    text: "Total No. of Managers",
    value: 6,
  },
  {
    id: 2,
    text: "Total No. of Employees",
    value: 90,
  },
  {
    id: 1,
    text: "Total No. of projects",
    value: 20,
  },
];

const Home = () => {
  const dispatch = useDispatch();
  // const authState = useSelector((state) `=> state.auth); 
  // console.log('authstate', authState)
  // const user = useSelector((state) => state.auth);
  // const role = user?.user?.userDetails?.role;
  // console.log("this is in role", role);
  // console.log("userDetails", details);
  // const locaUser = JSON.parse(localStorage.getItem("user"))
  // console.log("local User", locaUser)
  // const user = user
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user.userDetails.role;

  console.log(" role in home ", role)



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
