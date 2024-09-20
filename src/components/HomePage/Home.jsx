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
  return (
    <>
      <div className="home-main">
        <div className="home-body" >
          { role === "Admin" && homeBoxesData.map((item) => (
            <Box key={item.id} text={item.text} value={item.value} />
          ))}
          {(role === "Manager" || role === "Employee") && <Profile />}
        </div>
      </div>
    </>
  );
};

export default Home;
